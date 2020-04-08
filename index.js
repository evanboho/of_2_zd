exports.handler = async (event) => {

  let data = event.body;
  let buff = Buffer.alloc(data, 'base64');
  let text = buff.toString('ascii');
  console.log(`received ${text}`);

  const response = {
      statusCode: 200,
      body: JSON.stringify(text),
  };
  return response;
};
