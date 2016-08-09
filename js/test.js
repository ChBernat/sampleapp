'use strict';

const test = function(){
  const objects = JSON.parse(localStorage.getItem('emails'));
  return !objects.some(el => atob(el.hash) !== el.input)
}

export default test;