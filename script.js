let a = "";
let b = "";
let op = "";

const calculator = document.querySelector('.calcAll');
const keys = calculator.querySelector('.calcKeys')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {

    const key = e.target;
    const action = key.dataset.action;
    if (!action) {
        console.log('number key!')
      }
      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        console.log('operator key!')
      }
      if(action ==='clear'){
        console.log('clear key')
      }
      if(action ==='decimal'){
        console.log('decimal key')
      }
      if(action ==='calculate'){
        console.log('equal key')
      }

    }})



  const display=document.querySelector(".cDisplay")

  keys.addEventListener('click',e=>{
    if (e.target.matches('button')){
        const key=e.target
        const action =key.dataset.action;
        const keyContent= key.textContent;
        const displayedNum = display.textContent;
        const lastKey= calculator.dataset.lastKey;
        Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

        
        if(!action){
            if (displayedNum==='0'||lastKey==='operator'){
                display.textContent=keyContent
            }
            else{
                display.textContent=displayedNum+keyContent
            }
            }
        if(action==='decimal'){
            display.textContent=displayedNum+"."
        
        
      

        }  
        if (
            action ==='add'||
            action ==='subtract'||
            action ==='multiply'||
            action ==='divide')  {
                key.classList.add('is-depressed');
                calculator.dataset.lastKey = 'operator';
    
            }   
       
        
    

        }
    }
  )

// const numbBut = document.getElementsByClassName("num");
// const numOpe = document.getElementsByClassName("ope");
// const numEqu= document.getElementsByClassName("equ");
// const numCle= document.getElementsByClassName("cle");


function add(){
    return a+b;
}

function sub (){
    return a-b;
}

function mul(){
    return a*b;
}

function div(){
    return a/b;
}