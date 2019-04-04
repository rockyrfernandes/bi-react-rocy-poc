import { runWithAdal } from 'react-adal';
import { authContext } from './Main/adalConfig'
import "es6-promise";
import "isomorphic-fetch";
//import "babel-polyfill"
//import * as serviceWorker from './serviceWorker';

require('es6-promise').polyfill()
require('isomorphic-fetch')
 
const DO_NOT_LOGIN = false;
 
runWithAdal(authContext, () => {
   // eslint-disable-next-line
  require('./indexApp.js');
 
},DO_NOT_LOGIN);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
