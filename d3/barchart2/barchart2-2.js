//make data static bc don't know height

var width = 420, 
	barHeight = 20;

var linearScale = d3.scale.linear().range([0, width]);
//can't add domain until have data

//make a selection
var chart = d3.select(".chart").attr("width", width);

//LOAD THE DATA!!! Need to add three values

d3.csv("data.csv", type, function(error, data){
	linearScale.domain([0, d3.max(data, function(d){return d.value})]);
	chart.attr("height", barHeight * data.length);
//g stands for group
//give absolute positioning
//datum and index
//code to tell bars stack on each other
	var bar = chart.selectAll("g").data(data).enter().append("g").attr("transform", function(d, i){
		return "translate(0, " + i * barHeight + ")";
	});

	bar.append("rect")
		.attr("width", function(d){ return linearScale(d.value)})
		.attr("height", barHeight - 1);

	bar.append("text")
      .attr("x", function(d) { return linearScale(d.value) - 3; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d.value; });
});

function type(d) {
  d.value = +d.value //coerce to number
  return d;
}

//every callback in D3 expects one or two callback functions