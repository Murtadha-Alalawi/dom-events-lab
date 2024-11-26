
const numberButtons = document.querySelectorAll('.number');
const calculator = document.querySelector('#calculator');
const display = document.querySelector(".display");
const operationButtons = document.querySelectorAll(".operator")
const equalButton = document.querySelector(".equals")
const deleteButton = document.querySelector(".delete")
console.log(equalButton)
let firstNum
let operation = null
let secondNum
let total





    numberButtons.forEach((button)=>{
      button.addEventListener('click', (event)=>{
        if(!firstNum){
          firstNum = event.target.innerText
        }
        

        if(display.innerText === ''){
          display.innerText = firstNum
        } else if (operation === null) {
          display.innerText += event.target.innerText
          firstNum += event.target.innerText
          console.log(firstNum)
        }
    
        if(firstNum && operation !== null){
          if(!secondNum){ 
            secondNum = event.target.innerText
            display.innerText = secondNum
          } else {
            secondNum += event.target.innerText
          display.innerText += event.target.innerText
          }

          
         }
        
      
      })
    })
    operationButtons.forEach((button)=>{
      button.addEventListener("click",(event)=>{
        if(display.innerText === firstNum){
          operation = event.target.innerText
          console.log(operation)
          display.innerText = ''
        }
      
       
        // continue second number IF first is true and operation is ture

      })
    })

   
   equalButton.addEventListener("click", (event)=>{
    if(firstNum !== "" && operation !== "" && secondNum !== ""){

      if(operation === "+"){

       total =(Number(firstNum) + Number(secondNum))
       display.textContent=total
      }
      else if(operation === "-"){
       total = (Number(firstNum) - Number(secondNum))
       display.textContent=total
      }

      else if(operation === "*"){
        total = (Number(firstNum) * Number(secondNum))
       display.textContent=total
      }

      else if(operation === "/"){
        total = (Number(firstNum) / Number(secondNum))
        display.textContent=total
      }

    }
   })


   deleteButton.addEventListener("click", (event) => {
     if(display.innerText !== ""){
     display.innerText = null
     }
   })
   

  





