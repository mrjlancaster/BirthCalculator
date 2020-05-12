const runCalc = document.getElementById("button");
const number = document.getElementById("number").value;

runCalc.addEventListener('click', calculate);

function calculate() {
    const number = document.getElementById("number").value;
        if (number == "" || number == 0) {
            alert('Please add your age');
        }
        let date = new Date().getFullYear();
        let result = date - number;
            document.getElementById("year").style.display = "inline-block";
            document.getElementById("year").innerHTML = result;
}