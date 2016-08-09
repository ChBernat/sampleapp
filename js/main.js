'use strict';
import router from "./router";
import nav from "./navbar";
import login from "./login";
import logged from "./logged";
import moduler from "./dependency-loader";
import results from "./results";

import loginTpl from "../tpls/login.html";
import loggedTpl from "../tpls/logged.html";
import resultsTpl from "../tpls/results.html";

import test from "./test";

const hasher = (function(){
  let navbar = {};
  let config = {};
  const setConfig = (conf) => {config = conf};
  
  const setModules = () => {
    moduler.module([], 'navbar', navbar);
    moduler.module([], 'logged', logged, loggedTpl);
    moduler.module([], 'results', results, resultsTpl);
    moduler.module(['navbar'], 'login', login, loginTpl);
  };
  
  const setRoutes = () => {
      router.setRoute('login', 'login');
      router.setRoute('logged', 'logged');
      router.setRoute('results', 'results');
  }

  const loadDependencies = () => {
    navbar = nav(router);
  }

  const init = (conf) => {
    loadDependencies();
    setConfig(conf);
    setModules();
    setRoutes();
    navbar.activateButtons(router.checkRoute(localStorage.getItem('lastRoute')));
  };

  return {
    init: (conf) => init(config),
    test,
  };
}())

window.unitHashTest = hasher.test;
window.onload = hasher.init;

