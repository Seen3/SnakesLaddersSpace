let board=document.querySelector("#board");
let dieButton=document.querySelector("#RollDie");
let turn=document.querySelector("#turns");
let currentPlayer=1;
let blocks=[];
for (let i=0;i<36;i++)
{
    let block=document.createElement("div");
    block.className='block';
    block.id=`block${i}`;
    block.innerHTML=`<p>${i}</p>`
    blocks.push(block);
    board.appendChild(block);
}
function dieRoll(){
    return Math.floor((Math.random()*6)+1);
}

class Player{
    constructor()
    {
        this.position=0;
    }
    moveAhead(n){
        this.position+=n;
        if(this.position>35)
        {
            this.position=35;
        }
    }
    moveTo(n){
        this.position=n;
    }
};

let p1=new Player;
let p2=new Player;
dieButton.addEventListener('click',()=>{
    let dieVal=dieRoll();
    console.log(dieVal,currentPlayer);
    if(currentPlayer==1)
    {
        currentPlayer=2;
        p1.moveAhead(dieVal);
    }
    else{
        currentPlayer=1;
        p2.moveAhead(dieVal);
    }
    turn.innerHTML=`<p>Player ${currentPlayer} turn</p>`
    console.log(`p1=${p1.position}  p2=${p2.position}`);
})
