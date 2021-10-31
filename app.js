const firstOperand=document.getElementsByClassName("first-operand")[0];
console.log(firstOperand.value);
const secondOperand=document.getElementsByClassName("second-operand")[0];
const operator=document.getElementsByClassName("operator")[0];
console.log(operator);
const calBtn=document.getElementsByTagName('button')[0];
// console.log(calBtn);
const output=document.getElementsByTagName('p')[0];



// console.log(operator.innerText);
let result="";
console.log(result);
calBtn.onclick= function (){

    let ope=operator.value;

    let n1=parseFloat(firstOperand.value);
    let n2=parseFloat(secondOperand.value);


if(ope === "+"){
result=n1+n2;
output.innerHTML=`${n1} ${ope} ${n2}=${result}`;
}

if(ope === "-"){
    result=n1-n2;
    output.innerHTML=`${n1} ${ope} ${n2}=${result}`;
    }
    
if(ope === "/"){
    result=n1/n2;
    output.innerHTML=`${n1} ${ope} ${n2}=${result}`;
    }
    
if(ope === "*"){
    result=n1*n2;
    output.innerHTML=`${n1} ${ope} ${n2}=${result}`;
    }


};

// calBtn.addEventListener('click', cal);