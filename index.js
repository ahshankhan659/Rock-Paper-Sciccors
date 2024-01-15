let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const uScore=document.querySelector("#user-score")
const cScore=document.querySelector("#comp-score")

const genCompChoice=()=>{
    const options = ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]
}

const drawGame = ()=>{
    console.log("Match is Draw")
    msg.innerText="Game was Draw.Play Again!"
    msg.style.background='#081b31'
}

const showWinner=(userwinner,userChoice,compChoice)=>{
    if(userwinner){
        userScore++;
        uScore.innerText=userScore;
        console.log("User is Winner")
        msg.innerText=`User is Winner!,your ${userChoice} beats ${compChoice}`;
        msg.style.background="green";
    }else{
        compScore++;
        cScore.innerText=compScore;
        console.log("Comp is Winner");
        msg.innerText=`Comp is Winner!, ${compChoice} beats your ${userChoice}`
        msg.style.background="red";
    }
}

const playGame=(userChoice)=>{
    console.log("userChoice =",userChoice)
    //Generate Computer Choice
    const compChoice=genCompChoice();
    console.log("compChoice =",compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else{
        userwinner=true;
        if(userChoice === "rock"){
            //paper, scissors
            userwinner = compChoice ==="paper"?false:true;
        }else if (userwinner === "paper"){
            //rock, scissors
            userwinner = compChoice ==="scissors"?false:true;
        }else{
            //rock,paper
            userwinner = compChoice === "rock"?false:true;
        }
        showWinner(userwinner, userChoice,compChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.log(choice.getAttribute("id"))
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
        
        
    })
})