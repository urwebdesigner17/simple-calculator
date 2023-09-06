// PROJECT = FRONTEND CALCULATOR
const inp1 = document.getElementById('input1');
const inp2 = document.getElementById('input2');
const operand = document.getElementById('operator');
const opt = document.getElementById('btn');
const output = document.getElementById('output')
const validate = document.getElementById('warn')
const reset = document.getElementById('reset')

let result;
opt.addEventListener('click', ()=>{
    switch(operand.value){
        case '+':
            result = Number(inp1.value) + Number(inp2.value);
            break;
        case '-':
            result = Number(inp1.value) - Number(inp2.value);
            break;
        case '*':
            result = Number(inp1.value) * Number(inp2.value);
            break;
        case '/':
            result = Number(inp1.value) / Number(inp2.value);
            break;
        default:
            result = 'undefined';
            // validate.innerHTML = `<p style='margin-bottom: 1em'><span style ='color:red'>Error!!!</span> Choose only valid operator (+, -, *, /)</p>`;
            validate.innerHTML = validation;
            setTimeout(function() {
                document.getElementById("warn").classList.add("hidden");
            }, 5000);
    }
    output.innerHTML = result;
})
reset.addEventListener('click', ()=>{
    inp1.value = "";
    inp2.value = "";
    operand.value = "";
    output.innerHTML = 0;
    validate.innerHTML = "";
})

const validation = `<p style='margin-bottom: 1em'><span style ='color:red'>Error!!!</span> Choose only valid operator (+, -, *, /)</p>`;

function openPopup() {
document.getElementById("popup").style.display = "block";
}
function closePopup() {
document.getElementById("popup").style.display = "none";
}