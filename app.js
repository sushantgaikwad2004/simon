let userseq = [];
let appseq = ["red","yellow","blue","pink"];
let level = document.querySelector("#h2");
let start = false;
let bo = document.querySelector("body");
let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let blue = document.querySelector("#blue");
let pink = document.querySelector("#pink");
let button = document.querySelector("#buttons");
let ele;

document.addEventListener("click", startg);

// function click(){
//     let colorr = Math.floor(Math.random()*5);
//     alert(userseq[colorr]);

// }

function startg() {
    let rand = Math.floor(Math.random() * 5); 
    level.innerText = `Level ${rand}`;
     
}


document.addEventListener("keydown", () => {
   
    if (start == false) { 
        bo.style.backgroundColor = "green";

        setTimeout(() => {
            bo.style.backgroundColor = "white";
        }, 250);

        start = true; 
    } else {
        alert("Level has already started");
    }
});



function blink(){
    red.addEventListener("click",function(){
        blinkef(this);
        
    });
    yellow.addEventListener("click",function(){
        blinkef(this);
    });
    blue.addEventListener("click",function(){
        blinkef(this);
    });
    pink.addEventListener("click",function(){
        blinkef(this);
    });
    
}
function blinkef(element){
    let orignalc = element.style.backgroundColor;
    element.style.backgroundColor = "white";

    setTimeout(function (){
        element.style.backgroundColor = orignalc;
    },250);

    ele = element.getAttribute("id");
    userseq.push(ele);
    

}
blink();
document.addEventListener("dblclick", () => {
    
    if(userseq[0] == appseq[0]){
        alert("you won the game");
    }
    else{
        alert("you lose game");
    }

    console.log(userseq);

});
