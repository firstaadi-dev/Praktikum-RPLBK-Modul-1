
async function count() {
var operationEl = document.querySelector('input[name=operation]:checked').value

  var input = document.getElementsByName("array[]");
  var numArr = [];

  var isSum = operationEl == "sum" ? true : false;

  for (let i = 0; i < input.length; i++) {
    numArr.push(parseInt(input[i].value));
  }
  if (isSum) {
    var result = await numArr.reduce((prev, next) => prev + next);
  } else {
    var result = await numArr.reduce((prev, next) => prev - next);
  }

  document.getElementById("var").innerHTML = result;
}
