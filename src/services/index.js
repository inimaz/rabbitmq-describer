const graph = require('./graph/graph.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(graph);
};
