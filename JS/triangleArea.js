// Set value of input field
document
  .getElementById("triangleBaseInput")
  .addEventListener("focusout", function () {
    setValue("triangleBaseInput", "triangleBase");
  });

 document.getElementById("triangleHeightInput").addEventListener("focusout", function () {
    setValue("triangleHeightInput", "triangleHeight");             
    });

// Calculate the area of the triangle
document.getElementById("calculateTriangle").addEventListener("click", function () {
  const base = getInputNumberValueByID("triangleBase");
  const height = getInputNumberValueByID("triangleHeight");
  const area = multiplyTwoNumber(base, height) / 2;
  const name = getInnerTextById("triangleTitle");
  if (base <= 0 || height <= 0 || isNaN(base) || isNaN(height)) {
    alert("Please enter valid values");
    return;
  } else {
    displayResult(name, area);
  }
});
