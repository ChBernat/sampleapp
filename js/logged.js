'use strict';

const hash = () => {
  const hashPhrase = (e) => {
    const emailObject = {
      date: new Date(),
      userEmail: window.EMAIL,
      hash: btoa(document.querySelector('.hash').value),
      input: document.querySelector('.hash').value
    };

    let emailList = !!localStorage.getItem('emails') ? JSON.parse(localStorage.getItem('emails')) : [];
    emailList.unshift(emailObject);
    localStorage.setItem('emails', JSON.stringify(emailList));
    $('.alert-hasher')
      .html(`Success! Your hash is: ${emailObject.hash.slice(0, 8)}`)
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
  }
}

define(() => hash())
