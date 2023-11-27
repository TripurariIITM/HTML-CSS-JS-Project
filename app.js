let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "red", "purple", "green"];


let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
})


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    level++ ;
    h2.innerText = `Level ${level}`;


    let randomIndex = Math.floor(Math.random()*3);
    let randColor = btns[randomIndex];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function checkAns(){
    let idx = level-1;

    if(userSeq[idx]==gameSeq[idx]) {
        console.log("same value")
    }else{
        h2.innerText = "Game Over!";
    }
};

function btnPress(){
    let btn = this;
    btnFlash(btn); 
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress)
};