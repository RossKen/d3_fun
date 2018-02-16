// Create our array of medals data
var medalsData = [{Country: "AUS", gold: 31},
{Country: "CHN", gold: 74},
{Country: "GER", gold: 42},
{Country: "RUS", gold: 43},
{Country: "USA", gold: 125}];

// Let's also define some variables for our circle drawing
var maxRadius = 50;
var maxDiameter = maxRadius*2;
var offset = 20;
var maxGold = d3.max(medalsData, function(d){return d.gold;});

// Create the svg but this time make sure the svg size is large enough
d3.select("body").append("svg").style("height", 200).style("width", 600);

// Add circles to SVG, bind circles to data
d3.select("svg")
        .selectAll("circle").data(medalsData).enter()
        .append("circle")
        .attr("r", maxRadius)
        .attr("cx", function(d,i){return maxRadius + i*(offset+maxDiameter);})
        .attr("cy", maxRadius)
        .style("fill","red");
