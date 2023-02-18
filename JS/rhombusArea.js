// Set values for the input fields
document.getElementById("rhombusDiagonal1Input").addEventListener("focusout", function () {
    setValue("rhombusDiagonal1Input", "rhombusDiagonal1");
    }
);
document.getElementById("rhombusDiagonal2Input").addEventListener("focusout", function () {
    setValue("rhombusDiagonal2Input", "rhombusDiagonal2");
    }
);
// Calculate area of rhombus
document.getElementById("rhombusCalculateButton").addEventListener("click", function () {
    const diagonal1 = getInputNumberValueByID("rhombusDiagonal1");
    const diagonal2 = getInputNumberValueByID("rhombusDiagonal2");
    const rhombusArea = multiplyTwoNumber(diagonal1, diagonal2) / 2;
    const name = getInnerTextById("rhombusTitle");
    displayResult(name, rhombusArea);
    }
);
