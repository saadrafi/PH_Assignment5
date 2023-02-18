// Set values for the input fields
document.getElementById("pentagonPerimeterInput").addEventListener("focusout", function () {
  setValue("pentagonPerimeterInput", "pentagonPerimeter");
});
document.getElementById("pentagonBaseInput").addEventListener("focusout", function () {
  setValue("pentagonBaseInput", "pentagonBase");
});
// Calculate area of pentagon
document.getElementById("pentagonCalculateButton").addEventListener("click", function () {
  const perimeter = getInputNumberValueByID("pentagonPerimeter");
  const base = getInputNumberValueByID("pentagonBase");
  const pentagonArea = multiplyTwoNumber(perimeter, base) / 2;
  const name = getInnerTextById("pentagonTitle");
  displayResult(name, pentagonArea);
});
