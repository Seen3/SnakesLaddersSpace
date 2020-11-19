let board=document.querySelector("#board");
let blocks=[];
for (let i=0;i<36;i++)
{
    let block=document.createElement("div");
    block.className='block';
    block.innerHTML=`<p>${i}</p>`
    blocks.push(block);
    board.appendChild(block);
}
console.log(blocks);
