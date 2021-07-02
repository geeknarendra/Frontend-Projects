function playgame(){
    document.querySelector(".playGame").textContent="Playing"       // PLay Button
    document.querySelector(".deck").classList.remove("Fadein")
  
    const cards=document.querySelectorAll(".card")  //Select all card
    const move=document.getElementById("moves")        // Moves Entry
    const congras=document.getElementById("popup1") //Congratulations Msg




    let correct=0
    let movesDone=0
    move.textContent=movesDone

    let hasFlippedCard=false;
    let firstcard,secondcard;
    let boardLocked = false;

    function flipCard(){
        
        if(boardLocked) return;
        if(this===firstcard) return;
        this.classList.add('flip');

        if(!hasFlippedCard){
            //first card
            hasFlippedCard=true;
            firstcard=this;  
            return;
        }
        secondcard=this;
        movesDone++
        move.textContent=movesDone
        checkCard();
    }

    function checkCard(){
        // do card match
        if(firstcard.dataset.cardinfo === secondcard.dataset.cardinfo){
        cardDisable();
        }else{
        unflipCard();
        }
    }
    function cardDisable(){
        correct++
        firstcard.removeEventListener('click', flipCard);
        secondcard.removeEventListener('click', flipCard);
        console.log("Matched")
        reserBoard();
        if(correct==6){
            document.querySelector(".playGame").textContent="Play Again" 
            congratulation();
        }

        

    }

    function unflipCard(){
        boardLocked=true;
        console.log("Not Matched")
        setTimeout(()=>{
            firstcard.classList.remove('flip')
            secondcard.classList.remove('flip')
            reserBoard();
        },1200)

    }
    function reserBoard(){
        [hasFlippedCard,boardLocked]=[false,false]
        [firstcard,secondcard]=[null,null]
    }

    //SHUFFLE CARD
    (function shuffle() {
        cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 8);
        card.style.order = randomPos;
        });
    })();

    // Show cards
    cards.forEach((item)=>{
        item.classList.add("flip")
    })
    //Hide cards
    setTimeout(()=>{
        cards.forEach((item)=>{
            item.classList.remove("flip")
        })
    },1000)

    // FLIPPING CARD
    cards.forEach(card=> card.addEventListener('click',flipCard))


    function congratulation(){
        document.getElementById("finalMove").innerHTML=movesDone;
        congras.classList.add("show")
    
    }
}

