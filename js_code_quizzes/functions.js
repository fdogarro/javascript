1. What does the following code evaluate to?
var first_name = function (name) {
  return name;
}
first_name("bob");

bob

2. What does the following code evaluate to?
function add(x, y) {
  return x + y;
}
add(2, 3);

5

3. Create an anonymous function and assign it to the variable full_name.  The function should take two arguments, first_name and last_name, and return the two strings concatenated.

var full_name = function (first_name, last_name){
  return first_name + " " + last_name;
}

4. What does the following code print to the console?
function square (x) {
  return(x * x);
}
console.log(square(5));

25 


5. What does the following code print to the console?
function square (x) { return(x * x) };
function cube (x) {
  return(x * square(x));
}
console.log(cube(2));

8


6. Invoke the my_fun() function.
function my_fun() { return "I am having fun" };

my_fun();



7. What does the following code print to the console?
var what = function () { return "HI!!!!" };
console.log(typeof(what));

function

8. What does the following code print to the console?
var max_value = function(array) {
  var result = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > result) {
      result = array[i];
    };
  }
  return result;
}
console.log(max_value([1, 50, 2]));

50 

9. What does the following code print to the console?
var arr = ["boy", 42, 23, function () { return "gotta catch 'em all, Pokemon!" }, 56];

console.log(arr[3]());

"gotta catch 'em all, Pokemon!"

10. What is the code to invoke the following function?  
function kesha() {
  return "Your love is my drug";
}

kesha();

11. What does the following code print to the console?
var lambchop = function () {
  return "This is the song that never ends";
}
console.log(lambchop());

"This is the song that never ends"

12. What does the following code print to the console?
function doctor_name (last_name) {
  return "Dr. " + last_name
}
console.log(doctor_name());

Undefined there is no paramter

13. What does the following code print to the console?
function dwelling(name) {
  if (typeof(name) != "string") { throw "ArgumentError" };
  return name + " cave";
}
console.log(dwelling(42));

Argument Error

14. What does the following code print to the console?
function add(x, y) {
  return(x + y);
}
console.log(add(1, 2, 3, 4, 10, 20));

3

15. What does the following function return?
function args () {
  return arguments;
}
console.log(args(8, 7, 6, 5, 4));

{
  0: 8,
  1: 7,
  2: 6,
  3: 5,
  4: 4
}

16.What does the following code print to the console?
function lamp() {
  var my_special_variable = "I am special";
}
console.log(my_special_variable);

ReferenceError: my_special_variable is not defined

17. What does the following code print to the console?
function book() {
  good_book = "Slaughterhouse Five";
}
console.log(good_book);

ReferenceError: good_book is not defined

18. num = 23;
function evil () {
  num += 5;
}
evil();
console.log(num);

28

19. Create a function called min_value() that accepts an array of numbers as an argument and returns the smallest value from the array.

functon 
