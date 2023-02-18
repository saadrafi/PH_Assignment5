// Set value of input field
document.getElementById("ellipseAInput").addEventListener("focusout", function () {
  setValue("ellipseAInput", "ellipseA");
});
document.getElementById("ellipseBInput").addEventListener("focusout", function () {
  setValue("ellipseBInput", "ellipseB");
});
// Calculate area of ellipse
document.getElementById("ellipseCalculateButton").addEventListener("click", function () {
  const a = getInputNumberValueByID("ellipseA");
  const b = getInputNumberValueByID("ellipseB");
  const ellipseArea = multiplyTwoNumber(a, b) * 3.1416;
  const name = getInnerTextById("ellipseTitle");
  displayResult(name, ellipseArea);
});
