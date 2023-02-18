// Set value of input field
document.getElementById("parallelogramBaseInput").addEventListener("focusout", function () {
  setValue("parallelogramBaseInput", "parallelogramBase");
});
document.getElementById("parallelogramHeightInput").addEventListener("focusout", function () {
  setValue("parallelogramHeightInput", "parallelogramHeight");
});

// Calculate area of parallelogram

document.getElementById("parallelogramCalculateButton").addEventListener("click", function () {
  const base = getInputNumberValueByID("parallelogramBase");
  const height = getInputNumberValueByID("parallelogramHeight");
  const parallelogramArea = multiplyTwoNumber(base, height);
  const name = getInnerTextById("paraTitle");
  displayResult(name, parallelogramArea);
});
