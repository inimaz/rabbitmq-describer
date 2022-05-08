const axios = require('axios');

/**
 * Call rabbitmq endpoint to obtain JSON object with basic info about queues, routing_keys, bindings...
 * @param {*} app
 * @returns
 */
const getRabbitMQInfo = async (app) => {
  const rabbitMQConfig = app.get('rabbitMQConfig');
  let auth = Buffer.from(`${rabbitMQConfig.user}:${rabbitMQConfig.password}`);
  let base64auth = auth.toString('base64');
  const baseURL = rabbitMQConfig.managementURL;
  const url = new URL('/api/definitions', baseURL).toString();
  const config = {
    method: 'get',
    url,
    headers: {
      Authorization: `Basic ${base64auth}`,
    },
  };

  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
module.exports = getRabbitMQInfo;
