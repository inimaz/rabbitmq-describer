// Initializes the `elk` service on path `/elk`
const buildJsonGraph = require("./buildJsonGraph");

module.exports = function (app) {
  // Initialize our service with any options it requires
  app.get("/graph", function (req, res) {
    const html = buildHtml(buildJsonGraph());
    res.format({
      "text/html": function () {
        res.end(html);
      },
    });
  });
};

const buildHtml = (jsonGraph) => {
  const header = `
  <link rel="stylesheet" href="style.css">
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.21.1/cytoscape.min.js" integrity="sha512-H44mkyNG9R5Y8NDjFoZ0lnMGgxfsbfbuewUNJJjecVOUzR3n/JL8+UFc07pP74T5tA+aGOMKCwazdDYwoquE8g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script type="text/javascript">
  $(function() {
    var options ={
      container: document.getElementById("cy"), ...${JSON.stringify(
        jsonGraph
      )}};
    var cy = cytoscape(options 
    );
  });

</script><div><h1>RabbitMQ describer</h1></div>`;
  const body = `<div id="cy"></div>`;
  let html =
    "<!DOCTYPE html>" +
    "<html><head>" +
    header +
    "</head><body>" +
    body +
    "</body></html>";
  return html;
};
