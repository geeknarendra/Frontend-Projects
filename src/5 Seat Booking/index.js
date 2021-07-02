const booked=document.getElementById("booked");
const remaining=document.getElementById("remaining");
const seats=document.querySelectorAll(".sqare")


let book=0
let remain=64
booked.textContent=book;
remaining.textContent=remain;
const shows=document.querySelectorAll(".seatdetail")
shows.forEach((show)=>{
    show.addEventListener("click",function(){
    if(show.classList.contains("seatbooked")){
        show.classList.remove("seatbooked")
        show.src="./image/empty-seat.png";
        book--;
        remain++;
        booked.textContent=book;
        remaining.textContent=remain;

    } else{
        show.classList.add("seatbooked");
        show.src="./image/booked-seat.png";
        book++;
        remain--;
        booked.textContent=book;
        remaining.textContent=remain;

    }
    })
})

// seats.forEach((seat)=>{
//     seat.addEventListener("click",function(){
//         // seat.style.background=(seat.style.background == "white" ? "red" : "white")
//     if(seat.classList.contains("booked")){
//         seat.classList.remove("booked")
//         book--;
//         remain++;
//         booked.textContent=book;
//         remaining.textContent=remain;
//     } else{
//         seat.classList.add("booked")
//         book++;
//         remain--;
//         booked.textContent=book;
//         remaining.textContent=remain;
//     }
//     })
// })
