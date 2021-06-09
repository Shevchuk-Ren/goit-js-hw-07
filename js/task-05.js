// const nameInput = document.getElementById('name-input');
// const userName = document.getElementById('name-output');



const refs = {
    changeInput: document.getElementById('name-input'),
    userName: document.getElementById('name-output'),
};

refs.changeInput.addEventListener('input', getUserName);

function getUserName(event) {
    
      if (event.currentTarget.value === "") {
      return  refs.userName.textContent = 'незнакомец'; 
    } else {
       return refs.userName.textContent = event.currentTarget.value;
  }
};

