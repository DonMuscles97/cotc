console.log('this is working');

 document.querySelector('#drop').addEventListener('mouseover', onHover);

 function onHover(){
   document.querySelector('#drop-ul').classList.mouseover('active');
 }