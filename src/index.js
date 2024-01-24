import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"

import "./styles/main.css";

import "./script/component/app-bar.js"

import "./script/component/movie-list.js"

import "./script/component/movie-item.js"

import App from './app';


import main from "./script/view/main.js"
document.addEventListener('DOMContentLoaded', main);

const app = new App({
    content: document.querySelector('#mainContent'),
  });
  
  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  
  window.addEventListener('load', () => {
    app.renderPage();
  });
main();