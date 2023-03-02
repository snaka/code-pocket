const { GraphQLScalarType } = require('graphql')
const process = require('process')

let _id = 0
const users = [
  { "githubLogin": "mHattrup", "name": "Mike Hattrup" },
  { "githubLogin": "gPlake", "name": "Glen Plake" },
  { "githubLogin": "sSchmidt", "name": "Scot Schmidt" }
]
const photos = [
  {
    "id": "1",
    "name": "Dropping the Heart Chute",
    "description": "The heart chute is one of my favorite chutes",
    "category": "ACTION",
    "githubUser": "gPlake",
    "created": "3-28-1977"
  },
  {
    "id": "2",
    "name": "Enjoying the sunshine",
    "category": "SELFIE",
    "githubUser": "sSchmidt",
    "created": "1-2-1985"
  },
  {
    "id": "3",
    "name": "Gunbarrel 25",
    "description": "25 laps on gunbarrel today",
    "category": "LANDSCAPE",
    "githubUser": "sSchmidt",
    "created": "2018-04-15T19:09:57.308Z"
  }
]
const tags = [
  { "photoID": "1", "userID": "gPlake" },
  { "photoID": "2", "userID": "sSchmidt" },
  { "photoID": "2", "userID": "mHattrup" },
  { "photoID": "2", "userID": "gPlake" }
]

const requestGithubToken = credentials => {
  console.log('requestGithubToken')
  return fetch(
    'https://github.com/login/oauth/access_token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(credentials)
    }
  )
  .then(res => res.json())
  .catch(error => {
    throw new Error(JSON.stringify(error))
  })
}

const requestGithubUserAccount = token => {
  console.log('requestGithubUserAccount')
  return fetch('http://api.github.com/user?access_token=${token')
    .then(toJSON)
    .catch(throwError)
}

async function authorizeWithGithub(credentials) {
  const { access_token } = await requestGithubToken(credentials)
  const githubUser = await requestGithubUserAccount(access_token)
  return { ...githubUser, access_token }
}

exports = {
  Query: {
    totalPhotos: (parent, args, { db }) =>
      db.collection('photos')
        .estimatedDocumentCount(),

    allPhotos: (parent, args, { db }) =>
      db.collection('photos')
        .find()
        .toArray(),

    totalUsers: (parent, args, { db }) =>
      db.collection('users')
        .estimatedDocumentCount(),

    allUsers: (parent, args, { db }) =>
      db.collection('users')
        .find()
        .toArray()
  },
  Mutation: {
    postPhoto(parent, args) {
      const newPhoto = {
        id: _id++,
        ...args.input,
        githubUser: users[0].githubLogin,
        created: new Date()
      }
      photos.push(newPhoto)
      return newPhoto
    },
    async githubAuth(parent, { code }, { db, console }) {
      console.log( 'githubAuth' )
      let {
        message,
        access_token,
        avatar_url,
        login,
        name
      } = await authorizeWithGithub({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
      })
      console.log('client_id:', client_id)
      console.log('client_secret:', client_secret)

      if (message) {
        throw new Error(message)
      }

      let latestUserInfo = {
        name,
        githubLogin: login,
        githubToken: access_token,
        avatar: avatar_url
      }

      const {ops:[user] } = await db
        .collection('users')
        .replaceOne({ githubLogin: login }, latestUserInfo, { upsert: true })

      // return { user, token: access_token }
      return { user: 'hoge', token: 'fuga' }
    }
  },
  Photo: {
    url: parent => `http://example.com/img/${parent.id}.jpg`,
    postedBy: parent => {
      return users.find(u => u.githubLogin === parent.githubUser)
    },
    taggedUsers: parent => tags
      .filter(tag => tag.photoID === parent.id)
      .map(tag => tag.userID)
      .map(userID => users.find(u => u.githubLogin === userID))
  },
  User: {
    postedPhotos: parent => {
      return photos.filter(p => p.githubUser === parent.githubLogin)
    },
    inPhotos: parent => tags
      .filter(tag => tag.userID === parent.id)
      .map(tag => tag.photoID)
      .map(photoID => photos.find(p => p.id === photoID))
  },
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'A valid date time value',
    parseValue: value => new Date(value),
    serialize: value => new Date(value).toISOString(),
    parseLiteral: ast => ast.value
  })
}
