
const refs = {
     controlsForm: document.getElementById('controls'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    divBoxes: document.getElementById('boxes'),
    input: document.querySelector('input'),
}


refs.input.addEventListener('input', onInput);
refs.renderBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

let amount = 0; 

function onInput() {
   
    let x = refs.input.value;
    return x;
    
}


function createBoxes(amount) {
   
    let startValue = 30;
     
    amount = onInput();
    console.log(amount);

    for(let i = 1; i <= amount; i++) {
        
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        
        const divAtr = document.createElement('div');
        divAtr.classList = 'div-children';

        if (i > 1) {
            startValue += 10;
            
            divAtr.style = `height: ${startValue}px; width: ${startValue}px; background-color: rgb(${r}, ${g}, ${b});`;
            
            refs.divBoxes.appendChild(divAtr);
            
        } else {
            divAtr.style = `height: ${startValue}px; width: ${startValue}px; background-color: rgb(${r}, ${g}, ${b});`;
            refs.divBoxes.appendChild(divAtr);
        }
    }
};


function destroyBoxes() {
   
    refs.divBoxes.innerHTML = '';
    refs.input.value = '';

}




