var data = [4,8,15,16,23,42];

var width = 420, 
barHeight = 20;

var linearScale = d3.scale.linear().domain([0, d3.max(data)]).range([0, width]);

//select containing element
//set it's attr
//have to give svg width and height
var chart = d3.select(".chart").attr("width", width).attr("height", barHeight * data.length);

//select elements in chart and join data 
var barUpdate = chart.selectAll("g").data(data);
//bind data to the group element

//add new gs to the dom 

//since there are no bars, all exist in enter
//add them to the DOM
//SVG objects don't no that each other exist
barUpdate.enter().append("g").attr("transform", function(d,i){
	return "translate(0," + i * barHeight + ")";
});

//build rectangles(3 taken from barHeight bc it looks better)
barUpdate.append("rect").attr("width", linearScale).attr("height", barHeight - 3);

//add update all of the attributes

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





