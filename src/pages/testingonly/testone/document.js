// document.addEventListener("DOMContentLoaded", function() {
  var inputfield = document.getElementById("input");
  var button1 = document.getElementById("btn");
  var resultUi = document.getElementById("result");

  addEventListener("click", function () {
      var inputvalue = inputfield.value;
      resultUi.textContent = inputvalue;
  });
// }
// );
