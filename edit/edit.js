// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
//  get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//  Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Outside click
window.addEventListener('click', clickOutside);

// Function to open modal
function openModal(){
  modal.style.display = 'block'
};

// Function to close modal
function closeModal(){
  modal.style.display = 'none'
};

// Function to close modal if outside is clicked
function clickOutside(e){
  if(e.target == modal){
  modal.style.display = 'none'
};
}






// Get modal element
var modal2 = document.getElementById('simpleModal2');
// Get open modal button
var modalBtn2 = document.getElementById('modalBtn2');
//  get close button
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];

//  Listen for open click
modalBtn2.addEventListener('click', openModal2);
// Listen for close click
closeBtn2.addEventListener('click', closeModal2);
// Outside click
window.addEventListener('click', clickOutside2);

// Function to open modal
function openModal2(){
  modal2.style.display = 'block'
};

// Function to close modal
function closeModal2(){
  modal2.style.display = 'none'
};

// Function to close modal if outside is clicked
function clickOutside2(e){
  if(e.target == modal2){
  modal2.style.display = 'none'
};
}




// Get modal element
var modal3 = document.getElementById('simpleModal3');
// Get open modal button
var modalBtn3 = document.getElementById('modalBtn3');
//  get close button
var closeBtn3 = document.getElementsByClassName('closeBtn3')[0];

//  Listen for open click
modalBtn3.addEventListener('click', openModal3);
// Listen for close click
closeBtn3.addEventListener('click', closeModal3);
// Outside click
window.addEventListener('click', clickOutside3);

// Function to open modal
function openModal3(){
  modal3.style.display = 'block'
};

// Function to close modal
function closeModal3(){
  modal3.style.display = 'none'
};

// Function to close modal if outside is clicked
function clickOutside3(e){
  if(e.target == modal3){
  modal3.style.display = 'none'
};
}

// Get modal element
var modal0 = document.getElementById('simpleModal0');
// Get open modal button
var modalBtn0 = document.getElementById('modalBtn0');
//  get close button
var closeBtn0 = document.getElementsByClassName('closeBtn0')[0];

//  Listen for open click
modalBtn0.addEventListener('click', openModal0);
// Listen for close click
closeBtn0.addEventListener('click', closeModal0);
// Outside click
window.addEventListener('click', clickOutside0);

// Function to open modal
function openModal0(){
  modal0.style.display = 'block'
};

// Function to close modal
function closeModal0(){
  modal0.style.display = 'none'
};

// Function to close modal if outside is clicked
function clickOutside0(e){
  if(e.target == modal0){
  modal0.style.display = 'none'
};
}
