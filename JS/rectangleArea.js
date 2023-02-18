// Set value of input field
document.getElementById("rectangleLengthInput").addEventListener("focusout", function () {
    setValue("rectangleLengthInput", "rectangleLength");
});

document.getElementById("rectangleWidthInput").addEventListener("focusout", function () {
    setValue("rectangleWidthInput", "rectangleWidth");
});





document.getElementById("calculateRectangle").addEventListener("click", function () {
  const length = getInputNumberValueByID("rectangleLength");
  const width = getInputNumberValueByID("rectangleWidth");
  const area = multiplyTwoNumber(length, width);
  const name = getInnerTextById("rectangleTitle");
  if (length <= 0 || width <= 0 || isNaN(length) || isNaN(width)) {
    alert("Please enter valid values");
    return;
  } else {
    displayResult(name, area);
  }
});
