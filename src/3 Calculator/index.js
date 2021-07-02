function number(num){
    var result=document.getElementById("input")
    result.value+=num;
    console.log(num)
}

function result(){
    var result=document.getElementById("input")
    res=eval(result.value)
    result.value=parseFloat(res).toFixed(2)
}
function clearVal(){
    document.getElementById("input").value="";

}

function deleteChar(){
    var number=document.getElementById("input");
    let result=number.value;
    result=result.slice(0,-1)
    number.value=result;
}