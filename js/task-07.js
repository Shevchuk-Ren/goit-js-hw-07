const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.min = '0';
fontSizeControl.max = '100';


fontSizeControl.addEventListener('input', onChangeController);

function onChangeController() {
    
    let currentValue = fontSizeControl.value;
    text.style.fontSize = `${currentValue}px`;
    console.log(text);
}

// //** ВТОРОЙ ВАРИАНТ* /

// const fontSizeControl = document.getElementById('font-size-control');
// const text = document.getElementById('text');

// fontSizeControl.min = '0';
// fontSizeControl.max = '100';


// fontSizeControl.addEventListener('input', onChangeController);

// function onChangeController() {
    
//     let currentValue = fontSizeControl.value;
   
//     if (currentValue <= 20) {
//        text.style.fontSize = 'x-small'; 
//     } else if(currentValue > 20 && currentValue <= 40){
//         text.style.fontSize = 'small';
//     } else if(currentValue > 40 && currentValue <= 60){
//         text.style.fontSize = 'medium';
//     } else if(currentValue > 60 && currentValue <= 80){
//         text.style.fontSize = 'large';
//     } else if(currentValue > 80 && currentValue <= 100){
//         text.style.fontSize = 'xx-large';
//     }


// }