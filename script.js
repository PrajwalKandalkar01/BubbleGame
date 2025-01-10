var timer = 60;
var score = 0;
var hitrn = 0;
//jispe click karoge wo element  par element raise hoga or evennt listner na milne pr event element ke parent par
//  listner dhudenge, waja bhi ana milne par event parent ke parent par listner dhudenga 



function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;

}
function makeBubble(){
    var clutter= "";

for(var i=1; i<=85; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;

}

document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over<h1>`;
        }
        
        
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    // alert("chal raha he");
});
getNewHit(); 
runTimer();
makeBubble();
