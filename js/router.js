'use strict';

const resumeApplication = (route) => {
  NAVBAR.activateButtons(route);
  window.EMAIL = localStorage.getItem('loggedUserEmail');
}

const updateRoute = (routeName) => {
  window.location.href =  `${window.location.href.split('#')[0]}#${routeName}`;
  NAVBAR.modifyUrl(routeName);
}

const checkRoute = (routeName) => {
  let loggedUserEmail = localStorage.getItem('loggedUserEmail');
  let lastRoute = localStorage.getItem('lastRoute');
  if (!!!loggedUserEmail) routeName = 'login';
  if (!!loggedUserEmail && !!lastRoute && routeName === 'login') {
    routeName = lastRoute;
    resumeApplication(routeName);
  }
  return routeName;
}

const router = () => {
  const changeRoute = (routeName, scriptName) => {
    let deactivatePrevEv = () => {};
    return new Promise((resolve, reject) => {
      routeName = scriptName = checkRoute(routeName);
      require([`text!tpls/${routeName}.html`, `js/${scriptName}`],
             (tpl, script) => {
               updateRoute(routeName);
               document.querySelector('main').innerHTML = tpl;
               script.activate()
                .then(() => {
                  if (routeName !== 'login'){
                    localStorage.setItem('lastRoute', routeName);
                  }
                  deactivatePrevEv();
                  deactivatePrevEv = script.deactivate;
                  resolve();
                })
                .catch(reject);
             },
             (err) => console.error
      );
    });
  }
  return {
    changeRoute,
  }
};

define(() => router());
