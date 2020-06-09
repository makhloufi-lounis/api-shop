/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';

//Import React
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './lib/store';
import AppContainer from './containers/AppContainer';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');


// Log the initial state
console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))

unsubscribe()

const rootElement = document.querySelector("#app");
ReactDom.render(
    <Provider store={store}>
        <AppContainer /> 
    </Provider>, 
    rootElement
);