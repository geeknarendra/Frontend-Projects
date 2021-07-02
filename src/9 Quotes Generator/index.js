

const addQuotes=document.querySelector(".addQuotes");




addQuotes.addEventListener('click',()=>{

    let req=new Request("https://api.quotable.io/random")
    fetch(req)
    .then(val =>val.json())
    .then(val =>{
        // console.log(val.content)
        show(val);
    })
}
    )

function show(val){
    console.log(val)
    let quotesArea=document.querySelector(".quotes");
    str=`<div>

                    <div class="generatedQuotes">"${val.content}"<div>
                    <div class="author">~${val.author}</div>
                    
            </div>`
    quotesArea.innerHTML=str;
}


