
const textOp1 = document.getElementById("op1")
const textOperacion = document.getElementById("operacion")
const textOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click',calcular)

function calcular(){
    const operacion = textOperacion.value
    const op1 = parseFloat(textOp1.value) 
    const op2 = parseFloat(textOp2.value)
    
    if( (operacion == "+"  || operacion == "-" || operacion== "*" || operacion== "/") && !isNaN (op1) && !isNaN (op2) ) {
        let resultado;
        switch (operacion){
            case "+" :
                resultado = op1+op2
                break;
            case "-" :
                resultado = op1-op2
                break;
            case "*" :
                resultado = op1*op2
                break;
            case "/" :
                resultado = op1/op2
                break   
                
        }
        pResultado.style = "color:green"
        pResultado.innerText = "El resultado es " + resultado
    }else{
        
        pResultado.style = "color:red"
        pResultado.innerText = " El calculo no se puede hacer "
    }
}