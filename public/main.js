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
        // Go through the products that have the hidden class, if the call to action is activated, remove the class from each element so that it is shown
        product.classList.remove("hidden");
        count++;
      }

    });

    // If all have already been shown, hide the button
    if (document.querySelectorAll(".product-card.hidden").length === 0) {
      loadMoreBtn.style.display = "none";
    }
  });

  // Determine the date each year automatically.
  window.addEventListener("load", function () {
    let date = new Date();
    document.getElementById('year').innerText = date.getFullYear();
  })
});

//Menu hamburguer 
document.querySelector(".nav__toggle").addEventListener("click", function () {
  document.querySelector(".nav__menu").classList.toggle("active");
});
