import axios from 'axios';
import { IRabbitMQConfig } from './declarations';

/**
 * Call rabbitmq endpoint to obtain JSON object with basic info about queues, routing_keys, bindings...
 * @param {*} app
 * @returns
 */
export default async function getRabbitMQInfo(rabbitMQConfig: IRabbitMQConfig) {
  const auth = Buffer.from(`${rabbitMQConfig.user}:${rabbitMQConfig.password}`);
  const base64auth = auth.toString('base64');
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
      throw error;
    });
}
