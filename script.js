let a = "";
let b = "";
let op = "";

const calculator = document.querySelector('.calcAll');
const keys = calculator.querySelector('.calcKeys')

const calculate=(n1,operator,n2)=>{
  let result='';
  if (operator ==='add'){
  result=parseFloat(n1)+parseFloat(n2);
 }
 else if (operator==='subtract'){
  result = parseFloat(n1)-parseFloat(n2);
 }
 else if (operator==='multiply'){
  result= parseFloat(n1)*parseFloat(n2);
 }
 else if (operator ==='divide'){
  result = parseFloat(n1)/parseFloat(n2);
 }
 return Math.round(result*10)/10;
 }

// keys.addEventListener('click', e => {
//     if (e.target.matches('button')) {

//     const key = e.target;
//     const action = key.dataset.action;
//     if (!action) {
//         console.log('number key!')
//       }
//       if (
//         action === 'add' ||
//         action === 'subtract' ||
//         action === 'multiply' ||
//         action === 'divide'
//       ) {
//         console.log('operator key!')
//       }
//       if(action ==='clear'){
//         console.log('clear key')
//       }
//       if(action ==='decimal'){
//         console.log('decimal key')
//       }
//       if(action ==='calculate'){
//         console.log('equal key')
//       }

//     }})



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
                calculator.dataset.lastKey='num';
            }
            else{
                display.textContent=displayedNum+keyContent
            }
            }
        if(action==='decimal'){
          if (!displayedNum.includes(".")){
            display.textContent=displayedNum+".";
          }
          else if (lastKey==='operator'){
            display.textContent="0.";
            
          }

          calculator.dataset.lastKey='decimal';
          }
          if(action==='clear'){
            display.textContent='';
            calculator.dataset.lastKey="";

          }

            
        
        
      

          
     if (
            action ==='add'||
            action ==='subtract'||
            action ==='multiply'||
            action ==='divide')  {

              if(calculator.dataset.moreCal==='more'){
          let secondVal = displayedNum;
          let firstVal= calculator.dataset.firstVal;
          let operator =calculator.dataset.operator;
          display.textContent= calculate(firstVal,operator,secondVal);
          calculator.dataset.firstVal= display.textContent;

              }

            else{
                calculator.dataset.firstVal= displayedNum;
                calculator.dataset.operator=action;
                key.classList.add('is-depressed');
                calculator.dataset.lastKey = 'operator';
                calculator.dataset.moreCal='more';
              
              }
            }   


        if (action==='calculate'&&calculator.dataset.lastKey!='calculate'){

          const secondVal = displayedNum;
          const firstVal= calculator.dataset.firstVal;
          const operator =calculator.dataset.operator;
          if(calculator.dataset.lastKey='divide'&& display.textContent==='0'){
            display.textContent="Ayy what you playing";
      
          }
          else{

         display.textContent= calculate(firstVal,operator,secondVal);
         calculator.dataset.lastKey='calculate';
         calculator.dataset.moreCal='';

        }
         
        }
        
      }}

        
    
  )