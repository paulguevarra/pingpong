//back end
function toChange(userIn){
  var output = "";
  // var parsInput = parsInt(userIn)
  var myNum = [];
  var arrayStr = splitString(myNum, space);

function  splitString(myNum, space){
  var arrayString = stringToSplit.split(space);
};


  /*countform*/
  for(var i=1; i<=userIn; i++){
    myNum += i + " "
  };


//   /*substitutionform*/
//   for(var i=0; i<=pNum; i++){
// alert(i)
//     if (i%3 === 0) {
//       output += "ping"
//     } else {
//       output += i
//     }
//   };
  //

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
