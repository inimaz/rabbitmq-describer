/**
 * Builds an html containing cytoscape graph with the representation of RabbitMQ structure
 * @param {*} graph in cytoscape notation
 * @returns html string
 */
const buildHtml = (graph) => {
  const header = `
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.21.1/cytoscape.min.js" integrity="sha512-H44mkyNG9R5Y8NDjFoZ0lnMGgxfsbfbuewUNJJjecVOUzR3n/JL8+UFc07pP74T5tA+aGOMKCwazdDYwoquE8g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script type="text/javascript">
    $(function() {
      var options ={
        container: document.getElementById("cy"), ...${JSON.stringify(graph)}};
      var cy = cytoscape(options 
      );
    });
  
  </script><div><h1>RabbitMQ describer</h1></div>`;
  const body = '<div id="cy"></div>';
  let html =
    '<!DOCTYPE html>' +
    '<html><head>' +
    header +
    '</head><body>' +
    body +
    '</body></html>';
  return html;
};
module.exports = buildHtml;
