function add1(p1,p2){
    return Number(p1) + Number(p2);
}
function addition(){
     let num1=document.getElementById("add1").value; 
    let num2=document.getElementById("add2").value;
    let  result=  add1(num1, num2);
    if(num1==false){
        alert("this num1 cannot be empty");
    }
    else{
        alert("this num2 cannot be empty");
    }
    document.getElementById("sum").value=result;
   
}
function sub1(p1,p2){
    return Number(p1) - Number(p2);
}
function subtraction(){
    let num3=document.getElementById("sub1").value;
     let  num4=document.getElementById("sub2").value;
    let  result= sub1(num3, num4);
    if(num3==false){
        alert("this num3 cannot be empty");
    }
    else{
        alert("this num4 cannot be empty");
    }
    document.getElementById("sub").value=result; 
}

function mul1(p1,p2){
    return Number(p1) * Number(p2);
}
function multiplication(){
    let num5=document.getElementById("mul1").value;
     let  num6=document.getElementById("mul2").value;
    let  result= mul1(num5, num6);
    if(num5==false){
        alert("this num5 cannot be empty");
    }
    else{
        alert("this num6 cannot be empty");
    }
    document.getElementById("mul").value=result;
}

function div1(p1,p2){
    return Number(p1) / Number(p2);
}
function division(){
    let num7=document.getElementById("div1").value;
     let  num8=document.getElementById("div2").value;
    let  result= div1(num7, num8);
    if(num7==false){
        alert("this num7 cannot be empty");
    }
    else{
        alert("this num8 cannot be empty");
    }
    document.getElementById("div").value=result;
}
//let age=prompt("How old are you?,100");
//alert (age);

let isboss=confirm("Are you the boss?");
 if (isboss==true){
    alert("welcome boss!");
 }
 else{ alert ("get lost!");
}
 
 