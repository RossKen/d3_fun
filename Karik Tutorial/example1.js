// select body element
var bodySelection = d3.select("body");

// add svg element
var svgSelection = bodySelection.append("svg")
      .attr("width", 100)
      .attr("height", 100);

// lets draw a circle
var circleSelection = svgSelection.append("circle")
      .attr("r", 50)
      .attr("cx", 50)
      .attr("cy", 50)
      .style("fill", "red");
