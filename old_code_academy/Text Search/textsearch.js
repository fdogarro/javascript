var text = "feliciafeliciafelicia";
var myName = "felicia"; 
var hits = []; 

for(var i = 0; i < text.length; i++){
  if (text [i] == "f") {
for (var j = i ; j < (myName.length+i) ; j++) {
hits.push(text[j]);

}
}
}
console.log(hits);
   