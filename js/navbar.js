'use strict';

const navbar = () => {


    const modifyUrl = (url) => {
      document.querySelector('.url').innerHTML = url;
    };

    const goToHasher = () => {
        let btnLogout = document.querySelector('a.btn.btn-logout');
        let btnHasher = document.querySelector('a.btn.btn-hasher');
        let btnResults = document.querySelector('a.btn.btn-results');

        if(!btnLogout.style.display) {
          btnLogout.addEventListener('click', logOut);
          btnLogout.style.display = 'block';
        }

        btnHasher.removeEventListener('click', goToHasher);
        btnHasher.style.display = 'none';

        btnResults.addEventListener('click', seeResults);
        btnResults.style.display = 'block';
        window.router.changeRoute('logged', 'logged');
    };

    const logOut = () => {
      window.EMAIL = '';
      localStorage.removeItem('loggedUserEmail');
      let btnResults = document.querySelector('a.btn.btn-results');
      let btnLogout = document.querySelector('a.btn.btn-logout');

      btnResults.removeEventListener('click', seeResults);
      btnResults.style.display = 'none';

      btnLogout.removeEventListener('click', logOut);
      btnLogout.style.display = 'none';

      window.router.changeRoute('login', 'login');
    }

    const seeResults = () => {
      let btnHasher = document.querySelector('a.btn.btn-hasher');
      let btnResults = document.querySelector('a.btn.btn-results');

      btnResults.style.display = 'none';

      btnHasher.addEventListener('click', goToHasher);
      btnHasher.style.display = 'block';

      window.router.changeRoute('results', 'results');
    }

    const buttons = {
      'logged': goToHasher,
      'login': () => {},
      'results': seeResults,
    }

    const activateButtons = (routeName) => {
      console.log('a')
      buttons[routeName]();
    }

    return {
      modifyUrl,
      goToHasher,
      logOut,
      activateButtons,
    }
  // })
};

define(() => navbar);
