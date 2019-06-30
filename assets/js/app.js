// @TODO: YOUR CODE HERE!
// @TODO: YOUR CODE HERE!
var svgWidth = 1000;
var svgHeight = 600;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;
// Step 2: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Step 3:
// Import data from the csv file
// =================================
var file = "assets/data/data.csv"
d3.csv(file).then(successHandle, errorHandle);

function errorHandle(error){
  throw error;
}
