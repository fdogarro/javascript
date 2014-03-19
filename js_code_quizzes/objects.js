1. What does the following code print to the console?
var person = {
  name: "Joe Camel",
  age: 42,
  status: "dead"
}
console.log(typeof person);

object 

2. What does the following code print to the console?
var hat = {
  size: "large",
  color: "orange"
}
console.log(hat.size);

large 

3. What does the following code print to the console.
var teddy_bear = {
  texture: "fluffy"
}
console.log(teddy_bear["texture"]);

fluffy

4. What does the following code print to the console?
var fat_joe = {
  crew: "Terror Squad"
}
fat_joe.crew = "something";
console.log(fat_joe.crew);

something

5. What does the following code print to the console?
var pen = {};
pen.ink = "blue";
console.log(pen.ink);

blue 

6. What does the following code print to the console?
var walking_dead = {
  topic: "zombie apocalypse"
}
console.log(walking_dead["main_character"]);

undefined

7. What does the following code print to the console?
var bottle = {
  contents: function () { return "some fine bubbly" },
  color: "green"
}
console.log(bottle.contents());

"some fine bubbly 

8. What does the following code print to the console?
var yao = {
  self: function () { return this }
}
console.log(yao === yao.self());

true 

9. What does the following code print to the console?
var lebron = {
  occupation: "basketball",
  introduction: function () {
    return "My name is LeBron and I play " + this.occupation
  }
}
lebron.introduction();

"My name is LeBron and I play basketball"

10. What does the following code print to the console?
var square = {
  side_length: 4,
  area: function () { 
    return this.side_length * this.side_length;
  }
}
console.log(square.area());

16 

11. What does the following code print to the console?
var me = {
  first_name: "Matthew",
  last_name: "Powers",
  full_name: function () {
    return this.first_name + " " + this.last_name;
  }
}
console.log(me.full_name());

Matthew Powers 

12. What does the following code print to the console?
var mug = {
  capacity: "10 fluid ounces",
  customer_message: function (desired_size) {
    if (desired_size > 10) { return "This mug is not large enough for you" };
  }
}
console.log(customer_message(13));

This mug is not large enough for you 

13. 
