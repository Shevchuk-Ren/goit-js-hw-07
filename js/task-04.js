const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtn);
const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtn);
const valueCounter = document.getElementById('value');


let result = 0;

function decrement() {
    console.log('Добавим +1');
    result -= 1;
    valueCounter.textContent = result;
    console.log(result);
   
}

function increment() {
    console.log('Уберем -1');
    result += 1;
    valueCounter.textContent = result;
    console.log(result);  
}


incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);