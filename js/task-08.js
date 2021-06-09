

const controlsForm = document.getElementById('controls');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const divBoxes = document.getElementById('boxes');
const input = document.querySelector('input');


renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
input.addEventListener('input', onInput);


function onInput() {
   
    let x = input.value;
    return x;
}



function createBoxes(amount) {
    
    let startValue = 30;
    
    
    for(let i = 1; i <= onInput(); i++) {
        
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        
        const divAtr = document.createElement('div');
        divAtr.classList = 'div-children';

        if (i > 1) {
            startValue += 10;
            
            divAtr.style = `height: ${startValue}px; width: ${startValue}px; background-color: rgb(${x}, ${y}, ${z});`;
            
            divBoxes.appendChild(divAtr);
            
        } else {
            divAtr.style = `height: ${startValue}px; width: ${startValue}px; background-color: rgb(${x}, ${y}, ${z});`;
            divBoxes.appendChild(divAtr);
           
        }
        
    }
    
};

createBoxes(onInput);

function destroyBoxes() {
    
   
    divBoxes.innerHTML = '';
    input.value = '';

}




