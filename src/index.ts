// Initializes the `graph` service on path `/graph`
import { buildGraph } from './buildGraph';
import buildHtml from './buildHtml';
import { IRabbitMQConfig } from './declarations';
import obtainRabbitmqInfo from './obtainRabbitmqInfo';

/**
 * Given the basic connection information about your rabbitmq instance, it will connect to it, generate the graph and return an html
 * @param rabbitMQConfig
 * @returns
 */
export default async function (
  rabbitMQConfig: IRabbitMQConfig
): Promise<string> {
  const rabbitMQInfo = await obtainRabbitmqInfo(rabbitMQConfig);
  const generatedGraph = await buildGraph(rabbitMQInfo);
  const html = buildHtml(generatedGraph);
  return html;
}
