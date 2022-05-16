function findMin() {
    var S=0,t=0;
    for (let i = 0; i < 1e4; i++) {
        if(S+=i, S>1e4){
            // console.log(i);
            t=i;
            break;
        }
    }
    document.getElementById("txtResult3").innerHTML= "Số nguyên dương nhỏ nhất: " +t;
}