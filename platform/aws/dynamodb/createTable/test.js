const AWS = require('aws-sdk')

AWS.config.update({ region: 'ap-northeast-1' })
const dynamodb = new AWS.DynamoDB()

async function isTableExists(TableName) {
  try {
    const describeData = await dynamodb.describeTable({ TableName }).promise()
    return true
  } catch(e) {
    if (e.code === 'ResourceNotFoundException') {
      return false
    } else {
      throw e
    }
  }
}

async function createTable(TableName, ReadCapacityUnits = 1, WriteCapacityUnits = 1) {
  const isExist = await isTableExists(TableName)
  if (!isExist) {
    console.log('CREATE TABLE')
    const createData = await dynamodb.createTable({
      TableName,
      KeySchema: [
        { AttributeName: 'podcastId', KeyType: 'HASH' }
      ],
      AttributeDefinitions: [
        { AttributeName: 'podcastId', AttributeType: 'S' }
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits,
        WriteCapacityUnits
      }
    }).promise()
    console.log(createData)

    console.log('WAIT FOR TABLE EXISTS')
    const waitData = await dynamodb.waitFor('tableExists', { TableName }).promise()
    console.log(waitData)
  } else {
    console.log('TABLE ALREADY EXISTS:', TableName)
  }
}

createTable('bar').then(() => {
  console.log('finished')
})
