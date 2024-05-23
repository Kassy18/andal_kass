function addition(){
    let x=0;
    x=document.getElementById("add1").value;
    let z=0;
    z=document.getElementById("add2").value;
    ans1 = Number(x) + Number(z);
    document.getElementById("sum").value=ans1;
}
function subtraction(){
    let n=0;
    n=document.getElementById("sub1").value;
    let i=0;
    i=document.getElementById("sub2").value;
    ans2 = Number(n) - Number(i);
    document.getElementById("sub").value=ans2;

}
function multiplication(){
    let c=0;
    c=document.getElementById("mul1").value;
    let o=0;
    o=document.getElementById("mul2").value;
    ans3 = Number(c) * Number(o);
    document.getElementById("mul").value=ans3;
}
function division(){
    let a=0;
    a=document.getElementById("div1").value;
    let b=0;
    b=document.getElementById("div2").value;
    ans4 = Number(a) / Number(b);
    document.getElementById("div").value=ans4;

}



