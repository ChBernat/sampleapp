'use strict';

import * as moduler from "./dependency-loader";

const router = (function() {
  
  
  const routerAPI = {
    routes: {},
    setRoute(name, moduleName) {
      this.routes[name] = {
        moduleName,
        name,
      }
    },
    getRoute(routeName) {
      return this.routes[routeName]
    },
    changeRoute(routeName) {
      let route = this.getRoute(routeName);
      if(!route) return false;
      route = this.getRoute(this.checkRoute(route.name));
      maitainRoute(moduler.loadModule(route.moduleName));
    },
    checkRoute(routeName) {
      let loggedUserEmail = localStorage.getItem('loggedUserEmail');
      let lastRoute = localStorage.getItem('lastRoute');
      if (loggedUserEmail === null) routeName = 'login';
      if (!!loggedUserEmail && !!lastRoute && routeName === 'login') {
        routeName = lastRoute;
      }
      return routeName;
    },
  };
                
  let deactivatePrevEv = () => {};

  const updateRoute = (routeName) => {
    window.location.href = `${window.location.href.split('#')[0]}#${routeName}`;
  };
  
  const maitainRoute = (module) => {
     updateRoute(module.name);
    deactivatePrevEv();
    document.querySelector('main').innerHTML = module.template();
    let depScripts = (module.resolvedDependencies.length > 0) ? module.resolvedDependencies.map(el => el.script) : [];
    let currentScript = module.script(...depScripts);
    currentScript.activate();
        if (module.name !== 'login'){
          localStorage.setItem('lastRoute', module.name);
        }
        deactivatePrevEv = currentScript.deactivate;
   }
    
  return routerAPI;
}());

export default router;
