exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Miral',
      age: 96,
      email: 'miral@abc.com'
    })
  }
}