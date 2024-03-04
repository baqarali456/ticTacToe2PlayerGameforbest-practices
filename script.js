const choices = document.querySelectorAll('.choices');
const select_choice = document.querySelector('.select-choice');
const container = document.querySelector('.container');
let turn;
let playgame = true;

choices.forEach(choice=>{
    choice.addEventListener('click',function(){
      if(this.innerHTML === "X"){
        turn = "X"
      }
      else{
        turn = "O"
      }
    })
    
})