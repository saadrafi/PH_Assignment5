const Elements = document.querySelectorAll(".autoColor");

function randomcolor() {
  return Math.floor(Math.random() * 255);
}

function randomcolorgenerate(id) {
  const color = `rgba(${randomcolor()},${randomcolor()},${randomcolor()},${0.5})`;
  document.getElementById(id).style.backgroundColor = color;
}

for (Element of Elements) {
  Element.addEventListener("mouseenter", function (e) {
    randomcolorgenerate(e.target.id);
  });
}
