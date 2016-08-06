'use strict';

const hash = () => {
  const clickEventManager = (e) => {
    const emailObject = {
      date: new Date(),
      email: window.EMAIL,
      hash: btoa(document.querySelector('.hash').value),
      input: document.querySelector('.hash').value
    };

    let emailList = !!localStorage.getItem('emails') ? JSON.parse(localStorage.getItem('emails')) : [];
    emailList.push(emailObject);
    localStorage.setItem('emails', JSON.stringify(emailList));
    document.querySelector('.popover-content').innerHTML = emailObject.hash;
  };

  const activate = () => {
    new Promise(resolve => {
      document.querySelector('#hash').addEventListener('click', clickEventManager);
      $('#hash').popover();
      resolve();
    })
  };

  const deactivate = () => {
    document.querySelector('#hash').removeEventListener('click', clickEventManager, false);
  };

  return {
    activate: activate,
    deactivate: deactivate
  }
}

define(() => hash())
