const style = require("./cy-style");
const obtainRabbitmqInfo = require("./obtainRabbitmqInfo");
// Some default values
const defaultJsonGraph = {
  style,
  elements: {},
  layout: {
    name: "breadthfirst",
    directed: true,
    padding: 10,
    /* color: "#ffff00",*/
    fit: true,
  },
};

/**
 * Generates a cytoscape graph
 * @param {*} app
 * @returns graph following cytoscapejs notation
 */
const buildGraph = async (app) => {
  const rabbitMQInfo = await obtainRabbitmqInfo(app);
  let { nodes, edges } = generateNodesAndEdges(rabbitMQInfo);

  let jsonGraph = {};
  jsonGraph.style = defaultJsonGraph.style;
  jsonGraph.layout = defaultJsonGraph.layout;
  jsonGraph.elements = {
    nodes,
    edges,
  };

  return jsonGraph;
};

/**
 * Generate all the needed nodes and edges for cytoscape graph
 * @param {*} inputJson
 * @returns
 */
const generateNodesAndEdges = (inputJson) => {
  const idGlobalParent = "rabbitMQ";
  const globalParent = { data: { id: idGlobalParent } };
  const queues = [];
  inputJson.queues.forEach((queue) => {
    queues.push({
      data: { id: queue.name, parent: queue.vhost, type: "queue" },
    });
  });
  const vhosts = [];
  inputJson.vhosts.forEach((vhost) => {
    vhosts.push({
      data: { id: vhost.name, parent: idGlobalParent, type: "vhost" },
    });
  });
  const routing_keys_dict = {};
  inputJson.bindings.forEach((binding) => {
    routing_keys_dict[`${binding.routing_key}-${binding.vhost}`] = {
      data: {
        id: binding.routing_key,
        parent: binding.vhost,
        type: "routing_key",
      },
    };
  });
  const routing_keys = Object.keys(routing_keys_dict).map(function (key) {
    return routing_keys_dict[key];
  });

  const nodes = [...vhosts, ...queues, ...routing_keys, globalParent];
  const edges = [];
  inputJson.bindings.forEach((binding) => {
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

module.exports = { buildGraph, generateNodesAndEdges };
