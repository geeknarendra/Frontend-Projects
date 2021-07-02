window.onload=function(){
    var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {
        alert("Visit this on a Computer for Better View");              
    } 
}
 
const quizQuestion=[
    {
        ques:"The year in which HTML was first proposed _______",
        a:"1980",
        b:"1990",
        c:"1995",
        d:"2000",
        ans:"ans2"
    },
    {
        ques:"HTML uses",
        a:"User defined tags",
        b:"Pre-specified tags",
        c:"Fixed tags defined by the language",
        d:"Tags only for linking",
        ans:"ans3"
    },
    {
        ques:"HTML web pages can be read and rendered by _________",
        a:"Compiler",
        b:"Server",
        c:"Web Browser",
        d:"Interpreter",
        ans:"ans3"
    },
    {
        ques:"Which type of JavaScript language is ___",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Assembly-language",
        d:"High-level",
        ans:"ans2"
    },
    {
        ques:" Which one of the following also known as Conditional Expression:",
        a:"Alternative to if-else",
        b:"Switch statement",
        c:"If-then-else statement",
        d:"Immediate if",
        ans:"ans4"
    }
    

]
const optionBoxs=document.querySelectorAll(".optionArea")


const num=document.querySelector("#Number")
const ques=document.querySelector(".question")
const option1=document.querySelector("#option1")
const option2=document.querySelector("#option2")
const option3=document.querySelector("#option3")
const option4=document.querySelector("#option4")

const answers=document.querySelectorAll(".answer")
const submitButton=document.querySelector(".submitBttn")

const congrs=document.querySelector(".congrations")


let quesnumber=0;
let correctAns=0;

function loadQuestion(){
    num.innerHTML="No."+ (quesnumber+1)+"   "; 
    ques.innerHTML=quizQuestion[quesnumber].ques;
    option1.innerHTML=quizQuestion[quesnumber].a;
    option2.innerHTML=quizQuestion[quesnumber].b;
    option3.innerHTML=quizQuestion[quesnumber].c;
    option4.innerHTML=quizQuestion[quesnumber].d;  
}

function startQuiz(){
    document.querySelector(".startQuiz").classList.remove("show")
    document.querySelector(".inner-conatiner").classList.add("show")
    loadQuestion();

}

function CongrationNote(){
    document.querySelector(".score").textContent+=correctAns+" out of "+quizQuestion.length;
    document.querySelector(".inner-conatiner").classList.remove("show") 
    congrs.classList.add("show")


}
function LoadOrFinish(){
    quesnumber++;
    if(quesnumber==(quizQuestion.length-1)){
        submitButton.innerHTML="Final Submit"
    }
    if(quesnumber>=quizQuestion.length){
        console.log("Test Finish")
        CongrationNote(); 
    }else
    {
        console.log("More Ques")
        loadQuestion();
    }
}

function SubmitAns(){
    if(quesnumber>=quizQuestion.length) return;
    answers.forEach((ele)=>{
        if(ele.checked){

            if(ele.id===quizQuestion[quesnumber].ans){
                correctAns++
                console.log("Correct Ans")
            } else{
                console.log("Incorrect Ans")
            }
            LoadOrFinish();
        }
        ele.checked=false;
    })
}

submitButton.addEventListener("click",SubmitAns)





