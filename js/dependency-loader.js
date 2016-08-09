'use strict';
 const dependencyLoaderAPI = {
    module(dependencies, name, script, template) {
      this.modules[name] = {
        dependencies,
        name,
        script,
        template,
      };
    },
    modules: {},
    loadModule(name) {
      let module = this.modules[name];
      let dependency = {};
      const dependencyList = [];
      if(name && module){
        module.dependencies.forEach(dependencyName => {
          dependency = this.modules[dependencyName];
          if(dependency){
           dependencyList.push(dependency); 
          }
        });
        module.resolvedDependencies = dependencyList;
        return module;
      }
    },
  };

module.exports = dependencyLoaderAPI;