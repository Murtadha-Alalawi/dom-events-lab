
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector(".display");


const firstNum = 0
const operation = null 
const secondNum = 0


buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
     const value = event.target.innerText
     console.log(value)
    if(!isNaN(value)){
    if(display.innerText === '0'){
      display.innerText = value
     }

     else{
      display.innerText += value
     }}
    });
  });


  calculator.addEventListener('click', (event) => {
    ;
  
    if (event.target.classList.contains('number')) {
      
    }
  
    if (event.target.innerText === '*') {
    }
  });
  
  



const total = 0



