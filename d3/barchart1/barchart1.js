//data 
var data = [400,850,1500,160,2300,4200];
//select item
var chart = d3.select(".chart");

var bar = chart.selectAll("div");
//join data 
//store in variable

//set a range to scale down the numbers
var linearScale = d3.scale.linear().domain([0, d3.max(data)]).range([0, 420]);

var barUpdate = bar.data(data);
//update to add new guys that are added
var barEnter = barUpdate.enter().append("div");

barEnter.text(function(d){
	return d;
})

barEnter.style("width", function(d){
	return linearScale(d) + "px";
});



