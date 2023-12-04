

const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {

        let colorGermanu = colors.filter(color => color === "черный" || color === "красный" || color === "желтый")
        const colorString = colorGermanu.join("-")
    return colorString;
}

console.log(createColorString());