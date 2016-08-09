'use strict';


const login = function(navbar) {
  const validateEmail = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };

  const logUserIn = (e) => {
    let email = document.querySelector('input').value;
    if(validateEmail(email)) {
      localStorage.setItem('loggedUserEmail', email);
      navbar.goToHasher();
    } else {
      $('.alert-danger')
        .fadeIn('slow')
        .fadeOut(1500);
    };
  };

  const activate = () => {
    document.querySelector('#login').addEventListener('click', logUserIn);
  };

  const deactivate = () => {
    document.querySelector('#login').removeEventListener('click', logUserIn, false);
  };

  return {
    activate,
    deactivate,
  };
  
};

export default login;
