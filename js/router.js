'use strict';

const router = (routeName, scriptName) => {
  return new Promise((resolve, reject) => {
    require([`text!tpls/${routeName}.html`, `js/${scriptName}`],
           (tpl, script) => {
               window.location.href =  `${window.location.href.split('#')[0]}#${routeName}`
               document.querySelector('main').innerHTML = tpl;
               console.log(script)
               script.activate()
                .then(resolve);
           },
           (err) => console.error
    );
  });
};

define(() => router);
