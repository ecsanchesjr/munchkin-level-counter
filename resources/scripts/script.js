document.querySelectorAll('.main-box').forEach(div => {
   div.addEventListener('click',event => {
       div.childNodes.forEach(el => {
           if(el.className === 'pillbox-input'){
               el.focus();
           }
       });
   });
});

document.querySelectorAll('.pillbox-input').forEach(input => {
   input.addEventListener('keypress',e => {
       if(e.which == 13){
           if(e.target.value !== ''){
               let li = document.createElement('li');
               li.innerHTML = `${e.target.value} <i class="ion-close-round"></i>`;
               li.getElementsByTagName('i')[0].addEventListener('click',e => {
                   e.target.parentNode.remove();
               });
               e.target.value = ''; 
               e.target.parentNode.insertBefore(li,e.target);
           }
       }
   });
});