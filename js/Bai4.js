function tinhTong() {
    var x=document.getElementById("inputX").value;
    var n=document.getElementById("inputN").value;
    var S= 0;

    for (let i = 0; i <= n; i++) {
        S += Math.pow(x,i);
    }
    document.getElementById("txtResult4").innerHTML= "Tổng: " + S;
}
