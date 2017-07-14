//back end
function toChange(userIn){
  var output = "";

  /*countform*/
  for(var i=1; i<=userIn; i++){
    if((i%3)===0) {
      output += "ping" + " ";
    } else {
      output += i + " ";
    }
  };
  return output;

};

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
