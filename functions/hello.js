exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Darkbright',
      age: 99,
      email: 'darkbright@kakao.com'
    })
  }
}