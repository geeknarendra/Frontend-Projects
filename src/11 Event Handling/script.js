//On click
const clickHere=document.querySelector('.ClickHere');
clickHere.addEventListener('click',()=>{
    console.log("Hey");
    alert("Hey,Click Event happens")
})

// Key Up and Down
window.addEventListener("keydown",()=>{
    console.log("Double Click");
    let imgs=document.querySelector('.dbl');
    imgs.src="./image/happy.jpg"

})

window.addEventListener("keyup",()=>{
    console.log("Double Click");
    let imgs=document.querySelector('.dbl');
    imgs.src="./image/sad.jpg";

})



//Mouseover and Out
var img = document.querySelector('.mouseover');
 img.addEventListener("mouseout",()=>{
    console.log("MouseOut");
    img.src ='./image/Normal_bttn.png';
 })

 img.addEventListener("mouseover",()=>{
    console.log("mouseover");
    img.src = './image/MouseOver.png';
 })

 // Print
 window.onbeforeprint = (event) => {

    console.log("printing")
    alert("Page printing Process will be start soon")
}
window.onafterprint = (event) => {

    console.log("printing done")
    alert("Your HTML file print successfully")
}


//preload
const preloader = document.querySelector(".preloader")
window.addEventListener("load", () => {
    preloader.classList.add("hide")
})

//Resize
val=0;
window.addEventListener("resize",() => {
    console.log("Resize")
    let resize=document.querySelector(".resize");
    val+=1;
    resize.innerHTML=val;  
})