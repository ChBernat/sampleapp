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
  
  const setConfig = () => { 
    requirejs.config({
      baseUrl: './',
      paths: {
        es6: "node_modules/requirejs-babel/es6",
        babel: "node_modules/requirejs-babel/babel-5.8.34.min",
        text: './node_modules/text/text',
      },
    es6: {
      fileExtension: '.js'
    },
    babel: {
      presets: ['es2015'],
      plugins: ['transform-es2015-modules-amd']
    },      
      text: {
        useXhr: (url, protocol, hostname, port) => {
          return true;
        }
      }
    });
  };
  
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
    return new Promise((resolve, reject) => {
      navbar = nav(router);
      resolve();
    })
  }

  const init = (config) => {
    loadDependencies()
      .then(() => {
        setConfig(config);
        setModules();
        setRoutes();
        navbar.activateButtons(router.checkRoute(localStorage.getItem('lastRoute')));
    });
  };

  return {
    init: (config) => init(config),
    test,
  };
}())

window.unitHashTest = hasher.test;
window.onload = hasher.init;

