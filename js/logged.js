'use strict';

const hash = function() {
  
  const hashPhrase = (e) => {
    
    const emailObject = {
      date: new Date(),
      userEmail: localStorage.getItem('loggedUserEmail'),
      hash: btoa(document.querySelector('.hash').value),
      input: document.querySelector('.hash').value
    };
    let alertMessage = '';
    if(emailObject.input.length > 0){
      let emailList = !!localStorage.getItem('emails') ? JSON.parse(localStorage.getItem('emails')) : [];
      emailList.unshift(emailObject);
      localStorage.setItem('emails', JSON.stringify(emailList));
      alertMessage = `Success! Your hash is: ${emailObject.hash.slice(0, 8)}`;
    } else {
      alertMessage = `Failure! Input is empty!`;
    }
    
    $('.alert-hasher')
      .html(alertMessage)
      .slideDown()
      .delay(1500)
      .slideUp();
  };

  const activate = () => {
    return new Promise((resolve, reject) => {
      document.querySelector('#hash').addEventListener('click', hashPhrase);
      $('#hash').popover();
      resolve();
    })
  };

  const deactivate = () => {
    document.querySelector('#hash').removeEventListener('click', hashPhrase, false);
  };

  return {
    activate,
    deactivate
  };
  
};

export default hash;