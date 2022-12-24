let a;
let b;
let c;

document.getElementById("but").onclick = function(){

    a = document.getElementById("inpa").value;
        a = Number(a);

    b = document.getElementById("inpb").value;
        b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("answer").innerHTML = "c = " + c;   
    document.getElementById("answer").style.fontSize = "25px";
    document.getElementById("answer").style.textShadow = "0 0 4px white";
}
