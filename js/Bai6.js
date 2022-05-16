
function taoDiv(){
    for ( var e ="", t=1; t<=10; t++){
        if (t%2==0) {
            e+="<div class='bg-danger text-white p-2'>Div chan</div>" +'';
        }else{
            e+="<div class='bg-primary text-white p-2'>Div le</div>" +'';
        }
    }
    document.getElementById("txtResult6").innerHTML=e;
}