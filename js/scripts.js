// back end logic

var test = "abc.,def abcdef abcdef abcdef abcdef abcd'ef";


// regex to pull out all non alpha character
var cleanInput = function(input) {
  return input.replace(/[^a-z]*/gi,"");
};


// count characters and return size of square


// loop over string with regex and return every nth letter into a string

var encode = function(cleanString,squareSize) {
  var output = "";
  for (n=0;n<squareSize;n+=1){
    for (i=0;i<squareSize;i+=1){
      output = output + cleanString.charAt(n+(i*squareSize));
    }
    output = output +" ";
  }
  return output;
};







// UI logic
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var input = $(".code-input").val();
    var clean = cleanInput(input);
    var square = Math.ceil(Math.sqrt(clean.length));
    var output = encode(clean,square);
    $("#output").text(output);
  });



});
