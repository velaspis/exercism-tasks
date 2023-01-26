
//
// @ts-nocheck
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

import { notify } from"";


/**
 * @return void
 */
export function onSuccess() {
  // implement the onSuccess callback to call notify with a success message
  notify({ message: 'SUCCESS' }); 
}

/**
 * @return void
 */
export function onError() {
  // implement the onError callback to call notify with an error message
   notify({ message: 'ERROR'});
}

/**

 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  order(query, onSuccessCallback, onErrorCallback);
}

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export function postOrder(variety, quantity) {
 console.log(variety, quantity)
  order({variety, quantity},onSuccess, onError)
}