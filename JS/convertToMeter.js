document.getElementById("resultTable").addEventListener("click", function (e) {
  if (e.target.innerText.includes("Convert to m2")) {
    const value = e.target.parentElement.parentElement.children[2].children[0].innerText;

    const result = parseFloat(value) / 10000;
    e.target.parentElement.parentElement.children[2].children[0].innerText = result.toFixed(6);
    e.target.parentElement.parentElement.children[2].children[1].innerText = "m";

    e.target.innerHTML = `Convert to cm<sup>2</sup>`;
  } else {
    const value = e.target.parentElement.parentElement.children[2].children[0].innerText;
    const result = parseFloat(value) * 10000;
    e.target.parentElement.parentElement.children[2].children[0].innerText = result.toFixed(2);
    e.target.parentElement.parentElement.children[2].children[1].innerText = "cm";
    e.target.innerHTML = `Convert to m<sup>2</sup>`;
  }
});
