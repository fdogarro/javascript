var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

var width = 960,
		height = 500;

var svg = d3.select("body").append("svg")
		.attr("width", width)
		.attr("height", height)
	.append("g")
		.attr("transform", "translate(32," + (height / 2) + ")");

//1. Make an update function
function update(data){
	//2. Data Join 
	var text = svg.selectAll("text").data(data, function(d){return d;});
	//3.Update
	//data and nodes that match up
	//update old elements as needed
	text.attr("class", "update");

	//4. Enter
	text.enter().append("text")
		.attr("class", "enter")
		//need to change position 
		.attr("dy", ".35em")
		.text(function(d){return d});
		

// 5. Enter + Update
text.attr("x", function(d,i) { return i * 32 ;} )

// 6. Exit

text.exit().remove();
}

// set up our initial display

update(alphabet); 

//grab random sample of letters
setInterval(function() {
  update(shuffle(alphabet)
      .slice(0, Math.floor(Math.random() * 26))
      .sort());
}, 1500);

// Shuffles the input array.
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m], array[m] = array[i], array[i] = t;
  }
  return array;
}