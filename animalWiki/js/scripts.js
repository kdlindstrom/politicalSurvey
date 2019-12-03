$(document).ready(function(){
  var totalScore=0;
  $("#survey form").submit(function(event){
  var color = $("#color").val();
  var age = $("#age").val();
  var animal = $("#animal").val();

    if (color==='a. blue') {
      totalScore -=2;
    }else if (color==='b. yellow'){
      totalScore -=0;
    }else {
      totalScore+=2
    }

    if (age==='a. under 30') {
      totalScore -=2;
    }else if (age==='b. 30-50'){
      totalScore -=0;
    }else {
      totalScore+=2
    }

    if (animal==='a. giraffe') {
      totalScore -=2;
    }else if (animal==='b. pig'){
      totalScore -=0;
    }else {
      totalScore+=2
    }
    if (totalScore<0){
        alert("You're liberal.");
      }
    else{
      alert("you're conservative.")
    }

  });
});
