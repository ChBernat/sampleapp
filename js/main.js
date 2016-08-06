'use strict';

const hasher = (function(){
  const setConfig = () => {
    requirejs.config({
      baseUrl: './',
      paths: {
        text: './node_modules/text/text',
      },
      text: {
        useXhr: (url, protocol, hostname, port) => {
          return true;
        }
      }
    });
  };

  const init = () => {
    requirejs(['js/navbar'], navbar => window.NAVBAR = navbar())
    setConfig();
    requirejs(['js/router'], (router) => {
      router('login', 'login')
    });
  };

  return {
    init: () => init(),
  };
}())


window.onload = hasher.init;
