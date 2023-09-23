let serial = 0;

// This function is used to get the inner text of an element by its id for the name of the shape
function getInnerTextById(id) {
  return document.getElementById(id).innerText;
}

// This function is used to get the value of an text field by its id for the perameters of the shape
function getInputNumberValueByID(id) {
  input = document.getElementById(id).innerText;
  return parseFloat(input);
}

// This function is used to get the value of an text field by its id for set the value of the perameters of the shape in  the text field
function getInputValueByID(id) {
  input = document.getElementById(id).value;
  document.getElementById(id).value = "";
  return parseFloat(input);
}

// This function is used to multiply two numbers
function multiplyTwoNumber(number1, number2) {
  return number1 * number2;
}

// This function is used to update the value of the perameters of the shape in the text field
function updateField(id, value) {
  document.getElementById(id).innerText = value.toFixed(2) + "cm";
}

// This function is used to display the value of the parameters of the shape in the text field
function setValue(getId, setId) {
  const value = getInputValueByID(getId);
  if (value <= 0 || isNaN(value)) {
    updateField(setId, 0);
    alert("Please enter valid values");
  } else {
    updateField(setId, value);
  }
}

// This function is used to display the result of the shape in the table
function displayResult(name, result) {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${++serial}</td>
    <td>${name}</td>
    <td><span>${result.toFixed(2)}</span><span>cm</span><sup>2</sup></td>
     <td>
                    <button class="bg-[#1090D8] p-2 rounded text-xs">
                    Convert to m<sup>2</sup>
                    </button>
    </td>
    `;
  document.getElementById("tableContainer").appendChild(tr);
}
