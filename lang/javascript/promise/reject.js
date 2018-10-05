function resolved() {
  return Promise.resolve('ok')
}

function rejected() {
  return Promise.reject(new Error('ERR'))
}

resolved().then(result => console.log('resolved', result))
// => resolved ok
rejected().then(result => console.log('resolved', result)).catch(err => console.log('catch', err))
// => catch Error: ERR

const asyncResolve = async () => {
  const result = await resolved()
  console.log('async result', result)
}
asyncResolve()
// => async result ok

const asyncReject = async () => {
  const result = await rejected()
  console.log('async reject', result)
}
asyncReject()
// => async reject undefined
//    (UnhandledPromiseRejectionWarning: NG)

const asyncRejectWithTryCatch = async () => {
  let result
  try {
    result = await rejected()
  } catch (e) {
    console.log('async reject catched', e)
  }
  console.log('async reject', result)
}
asyncRejectWithTryCatch()
// => async reject catched Error: ERR
