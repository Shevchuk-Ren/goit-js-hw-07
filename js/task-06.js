const input = document.getElementById('validation-input');

input.addEventListener('blur', onInputBlur);


function onInputBlur(event) {

     let currentLengthString = event.currentTarget.value.length;
    let maxLengthString = event.currentTarget.dataset.length;

    // console.log(event.currentTarget.dataset.length);
    if (currentLengthString <= maxLengthString) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    console.log(event.currentTarget);
 
    } else if(currentLengthString > maxLengthString) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    console.log(event.currentTarget);

    };
   
}














// const input = document.getElementById('validation-input');
// // const maxInputLength = document.querySelector(['data-length="6"']);

// // const refs = {
// //     input: document.getElementById('validation-input'),
// //     maxInputLength: document.querySelector('[data-length="6"]'),
// // };

// // refs.input.addEventListener('input', onInputChange);
// // refs.input.addEventListener('focus', onInputFocus);
// // refs.input.addEventListener('blur', onInputBlur);
// input.addEventListener('blur', onInputBlur);

// // function onInputChange(event) {
// //     console.log('Ввод продолжается: ', event.currentTarget.value.length);
   
// // }
// // function onInputFocus(event) {
    
// // }
// function onInputBlur(event) {
//     // console.log('Ввод закончен');

//      let currentLengthString = event.currentTarget.value.length;
//     let maxLengthString = event.currentTarget.dataset.length;

//     // console.log(event.currentTarget.dataset.length);
//     if (currentLengthString <= maxLengthString) {
//         input.classList.add('valid');
//         input.classList.remove('invalid');
//     console.log(event.currentTarget);
 
//     } else if(currentLengthString > maxLengthString) {
//         input.classList.add('invalid');
//         input.classList.remove('valid');
//     console.log(event.currentTarget);

//     };
   
// }