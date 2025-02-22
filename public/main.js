/*
  * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
  * This devtool is neither made for production nor for readable output files.
  * It uses "eval()" calls to create a separate source file in the browser devtools.
  * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
  * or disable the default devtool with "devtool: false".
  * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
**/

(() => { // webpackBootstrap
	var __webpack_modules__ = ({
    "./src/app.js": (() => {
      console.log('Gradiweb is online!!!');
    })
  });

/************************************************************************/

  var __webpack_exports__ = {};
	__webpack_modules__["./src/app.js"]();
})();

document.addEventListener("DOMContentLoaded", function () {

  const hiddenProducts = document.querySelectorAll(".product-card.hidden");
  const loadMoreBtn = document.getElementById("loadMore");
  const header = document.querySelector('.header__container');

  // Script for header, scroll
  window.addEventListener("scroll", function () {
    (window.scrollY > 20) ? header.classList.add("scroll") : header.classList.remove("scroll");
  })

  // btns show all products
  loadMoreBtn.addEventListener("click", () => {
    let count = 0;
    
    hiddenProducts.forEach((product) => {
      if (count < hiddenProducts.length) {
        product.classList.remove("hidden");
        count++;
      }

    });

    // If all have already been shown, hide the button
    if (document.querySelectorAll(".product-card.hidden").length === 0) {
      loadMoreBtn.style.display = "none";
    }
  });
});

