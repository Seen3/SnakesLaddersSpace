let board=document.querySelector("#board");
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
class Player{
    constructor()
    {
        this.position=0;
    }
    moveAhead(n){
        this.position+=n;
    }
    moveTo(n){
        this.position=n;
    }
};

console.log(blocks);
