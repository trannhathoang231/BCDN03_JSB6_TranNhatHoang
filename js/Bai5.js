function tinhGT() {
    var n = document.getElementById("inputN1").value, S=1;
    for (let i = 1; i <=n ; i++) {
        S*=i;
        
    }
    document.getElementById("txtResult5").innerHTML = "Giai thừa: " + S;
}