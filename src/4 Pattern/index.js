const container=document.querySelector(".container");

const defaultWhite = [
	129, 130, 148, 149, 150, 151, 167, 168, 169, 170, 171, 172, 186, 187, 189,
	190, 192, 193, 206, 207, 208, 209, 210, 211, 212, 213, 228, 231, 247, 249,
	250, 252, 266, 268, 271, 273,
];

for(let i=0;i<400;i++){
    container.innerHTML+='<div class="square"></div>';
}
const square=document.querySelectorAll(".square")
for(let i=0;i<400;i++){
    if(defaultWhite.includes(i)){
        // Do Nothing
    }else{
        square[i].classList.add("bg-red");
    }
}
square.forEach((block)=>{
    block.addEventListener("click",()=>{
        block.classList.contains("bg-red")?block.classList.remove("bg-red"):block.classList.add("bg-red");
    })
})