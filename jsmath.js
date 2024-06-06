function addition(){
    let x=0;
    x=document.getElementById("add1").value;
    if(x==false){
        alert("this x cannot be empty");
    }
    else{
        alert("Enter a number");
    }
    let z=0;
    z=document.getElementById("add2").value;
    if(z==false){
        alert("this z cannot be empty");
    }
    else{
        alert("Enter a number");
    }
    ans1 = Number(x) + Number(z);
    document.getElementById("sum").value=ans1;
}
function subtraction(){
    let n=0;
    n=document.getElementById("sub1").value;
    if(n==false){
        alert("this n cannot be empty");
    }
    else{
        alert("Enter a number");
    }
    let i=0;
    i=document.getElementById("sub2").value;
    if(i==false){
        alert("this i cannot be empty");   
    }
    else{
        alert("Enter a number");
    }
    ans2 = Number(n) - Number(i);
    document.getElementById("sub").value=ans2;

}
function multiplication(){
    let c=0;
    c=document.getElementById("mul1").value;
    if(c==false){
        alert("this c cannot be empty");
      
    }
    else{
        alert("Enter a number");
    }
    let o=0;
    o=document.getElementById("mul2").value;
    if(o==false){
        alert("this o cannot be empty");
    }
    else{
        alert("Enter a number");
    }
    ans3 = Number(c) * Number(o);
    document.getElementById("mul").value=ans3;
}
function division(){
    let a=0;
    a=document.getElementById("div1").value;
    if(a==false){
        alert("this a cannot be empty");
       
    }
    else{
        alert("Enter a number");
    }
    let b=0;
    b=document.getElementById("div2").value;
    if(b==false){
        alert("this b cannot be empty");
    }
    else{
        alert("Enter a number");
    }
    ans4 = Number(a) / Number(b);
    document.getElementById("div").value=ans4;

}



