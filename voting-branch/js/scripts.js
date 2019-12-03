$(document).ready(function(){




var currentAge = parseInt(prompt("What is your current age?)"));
if (currentAge >= 18) {
  $('#adultAge').show();
} else {
  $('#underage').show();
}
});
