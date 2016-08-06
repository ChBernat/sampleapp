'use strict';

const navbar = () => {
  // return new Promise(resolve => {

    const modifyUrl = (url) => {
      document.querySelector('.url').innerHTML = url;
    };

    const logout = () => {

    }

    const logIn = () => {

    }

    const seeResults = () => {
      
    }

    return {
      modifyUrl: (url) => modifyUrl(url),
      logIn: () => logIn(),
      logOut: () => logOut(),
    }
  // })
};

define(() => navbar);
