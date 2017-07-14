//back end
function toChange(userInput){
  output = userInput

  return output;
}



//front end
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var input = $("input#userNumber").val();
    var output = toChange(input);
    $("#result").text(output);

  });
});

console.log("Passed");
