console.log("Archana");
let touchSound=new Audio("touchSound.mp3");
let gameOver=new Audio("gameOver.mp3");
let music=new Audio("music.mp3");
let turn="X";
let isGameover=false;

const changeTurn=()=>{
    return turn==="X" ?"0": "X";
}
const checkWin=()=>{
    let boxtexts=document.querySelectorAll(".boxText");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    wins.forEach(e=>{
        if ((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&& (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) &&
        (boxtexts[e[0]].innerText!=="")){
            isGameover=true;
            gameOver.play();
            document.querySelector(".info").innerText=boxtexts[e[0]].innerText+" Won the game ";
            document.querySelector(".imgInfo").getElementsByTagName("img")[0].style.width="200px";
        }
    })
}
boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach( ele=>{
    let boxtext=ele.querySelector(".boxText");
    ele.addEventListener("click",()=>{
        if (boxtext.innerText ==="" && !isGameover){
            boxtext.innerText=turn;
            turn=changeTurn();
            touchSound.play();
            checkWin();
            if (!isGameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+ turn ;
            }
        }
    })
})
let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    let boxtexts=document.querySelectorAll(".boxText");
    Array.from(boxtexts).forEach(ele=>{
        ele.innerText="";
    });
    turn="X";
    isGameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn ;
    document.querySelector(".imgInfo").getElementsByTagName("img")[0].style.width="0px";
})