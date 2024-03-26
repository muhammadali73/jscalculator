function add() {
    const num1 = parseFloat(document.getElementById("input1").value);
    const num2 = parseFloat(document.getElementById("input2").value);
    const result = num1 + num2;
    document.getElementById("result").innerHTML = result;
}
document.addEventListener("keydown", function(event) {
    if (event.key === "+") {
        add();
    }
});

function sub() {
    const num1 = parseFloat(document.getElementById("input1").value);
    const num2 = parseFloat(document.getElementById("input2").value);
    const result = num1 - num2;
    document.getElementById("result").innerHTML = result;
}
document.addEventListener("keydown", function(event) {
    if (event.key === "-") {
        sub();
    }
});

function mult() {
    const num1 = parseFloat(document.getElementById("input1").value);
    const num2 = parseFloat(document.getElementById("input2").value);
    const result = num1 * num2;
    document.getElementById("result").innerHTML = result;
}
document.addEventListener("keydown", function(event) {
    if (event.key === "*") {
        mult();
    }
});

function div() {
    const num1 = parseFloat(document.getElementById("input1").value);
    const num2 = parseFloat(document.getElementById("input2").value);
    if (num2 === 0) {
        document.getElementById("result").innerHTML = "Math Error: Division by Zero";
    } else {
        const result = num1 / num2;
        document.getElementById("result").innerHTML = result;
    }
}
document.addEventListener("keydown", function(event) {
    if (event.key === "/") {
        div();
    }
});
