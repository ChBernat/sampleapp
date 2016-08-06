'use strict';

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const loginLogic = (e) => {
  let email = document.querySelector('input').value;
  if(validateEmail(email)) {
    window.EMAIL = email;
    NAVBAR.logIn();
    NAVBAR.modifyUrl('logged');
    requirejs(['js/router'], router => router('logged', 'logged'));
  } else {

  }
}

const activate = () => {
  return new Promise((resolve) => {
    document.querySelector('#login').addEventListener('click', loginLogic)
    resolve();
  });
}

const deactivate = () => {
  document.querySelector('#login').removeEventListener('click', loginLogic, false);
}

const login = () => {
  return {
    activate,
    deactivate,
  }
};

define(() => login());
