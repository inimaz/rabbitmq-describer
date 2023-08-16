import style from './style/cy-style';
import { INodeInfo, IRabbitMQInfo } from './declarations';
// Some default values
const defaultJsonGraph = {
  style,
  elements: {},
  layout: {
    name: 'breadthfirst',
    directed: true,
    padding: 10,
    color: '#ffff10',
    fit: true,
  },
};

/**
 * Generates a cytoscape graph
 * @param {IRabbitMQInfo} rabbitMQInfo
 * @returns graph following cytoscapejs notation
 */
export const buildGraph = async (rabbitMQInfo: IRabbitMQInfo) => {
  const { nodes, edges } = generateNodesAndEdges(rabbitMQInfo);

  const jsonGraph = {
    style: defaultJsonGraph.style,
    layout: defaultJsonGraph.layout,
    elements: {
      nodes,
      edges,
    },
  };

  return jsonGraph;
};

/**
 * Generate all the needed nodes and edges for cytoscape graph
 * @param {*} rabbitMQInfo
 * @returns
 */
export const generateNodesAndEdges = (
  rabbitMQInfo: IRabbitMQInfo
): {
  nodes: INodeInfo[];
  edges: INodeInfo[];
} => {
  const idGlobalParent = 'rabbitMQ';
  const globalParent = { data: { id: idGlobalParent } };
  const queues: INodeInfo[] = [];
  rabbitMQInfo.queues.forEach((queue) => {
    queues.push({
      data: { id: queue.name, parent: queue.vhost, type: 'queue' },
    });
  });
  const vhosts: INodeInfo[] = [];
  rabbitMQInfo.vhosts.forEach((vhost) => {
    vhosts.push({
      data: { id: vhost.name, parent: idGlobalParent, type: 'vhost' },
    });
  });
  const routing_keys_dict = {};
  rabbitMQInfo.bindings.forEach((binding) => {
    routing_keys_dict[`${binding.routing_key}-${binding.vhost}`] = {
      data: {
        id: binding.routing_key,
        parent: binding.vhost,
        type: 'routing_key',
      },
    };
  });
  const routing_keys = Object.keys(routing_keys_dict).map(function (key) {
    return routing_keys_dict[key];
  });

  const nodes: INodeInfo[] = [
    ...vhosts,
    ...queues,
    ...routing_keys,
    globalParent,
  ];
  const edges: INodeInfo[] = [];
  rabbitMQInfo.bindings.forEach((binding) => {
    edges.push({
      data: {
        id: `e${binding.routing_key}-${binding.destination}`,
        source: binding.routing_key,
        target: binding.destination,
        parent: binding.vhost,
      },
    });
  });
  return { nodes, edges };
};
