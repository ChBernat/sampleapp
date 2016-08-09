'use strict';

const navbar = function(router) {
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
        modifyUrl('logged');
        router.changeRoute('logged');
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
      
      modifyUrl('login');
      router.changeRoute('login');
    };

    const seeResults = () => {
      let btnHasher = document.querySelector('a.btn.btn-hasher');
      let btnResults = document.querySelector('a.btn.btn-results');

      btnResults.style.display = 'none';

      btnHasher.addEventListener('click', goToHasher);
      btnHasher.style.display = 'block';
      modifyUrl('results');
      router.changeRoute('results');
    };

    const buttons = {
      'logged': goToHasher,
      'login': () => {router.changeRoute('login')},
      'results': seeResults,
    };

    const activateButtons = (routeName) => {
      modifyUrl(routeName);
      buttons[routeName]();
    };

    return {
      modifyUrl,
      goToHasher,
      logOut,
      activateButtons,
    };
};

export default navbar;
