$('.add-gif').on('click',function()
{
   let gif =$('.gif-link').val();
   let str =`<div class="card 1 border m-2>
            <img class="card-img-top" src="${gif}" alt="Card image cap">
             <div class="card-body">
             <span><span class="count">0</span>
              <span CLASS="m-3">👍  2 thumbs </SPAN>
                 <SPAN> ❤️ 23 likes</span>
             </div>
             </div>`
             $('.gifs').append(str)

});


const btn = document.getElementById('btnel')
const answer=document.getElementById('ans')
let count=0
answer.innerHTML=count


function likescount(){
    count+=1
    answer.innerHTML=count
}
