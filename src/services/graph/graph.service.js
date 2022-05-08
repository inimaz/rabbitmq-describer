// Initializes the `graph` service on path `/graph`
const { buildGraph } = require('./buildGraph');
const buildHtml = require('./buildHtml');

module.exports = function (app) {
  app.get('/graph', async function (req, res) {
    const generatedGraph = await buildGraph(app);
    const html = buildHtml(generatedGraph);
    res.format({
      'text/html': function () {
        res.end(html);
      },
    });
  });
};
