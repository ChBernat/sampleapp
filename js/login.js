'use strict';

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const logUserIn = (e) => {
  let email = document.querySelector('input').value;
  if(validateEmail(email)) {
    window.EMAIL = email;
    localStorage.setItem('loggedUserEmail', email);
    NAVBAR.goToHasher();
  } else {
    $('.alert-danger')
      .fadeIn('slow')
      .fadeOut(1500);
  }
}

const activate = () => {
  return new Promise((resolve, reject) => {
    document.querySelector('#login').addEventListener('click', logUserIn);
    resolve();
  });
}

const deactivate = () => {
  document.querySelector('#login').removeEventListener('click', logUserIn, false);
}

const login = () => {
  return {
    activate,
    deactivate,
  }
};

define(() => login());
