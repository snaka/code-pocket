import { request } from 'graphql-request'

let query = `
  query listUsers {
    allUsers {
      name
      avatar
    }
  }
`

request('http://localhost:4000/graphql', query)
  .then(console.log)
  .catch(console.error)