// Copyright 2013 Carlos Matos - www.startupeando.com.br
//
// Generates color overlay effect to any image, by just using CSS classes
// Format: ".overlay-[color]" or ".overlay-[color]-hover", to apply the filter just on mouse over
//
// Feel free to copy, use, modify, delete, have a beer or anything that comes to mind


// Creates a "false" DIV around the IMG tag and attributes it a new class
$(".overlay-blue").wrap("<div class='tint-blue'></div>");
$(".overlay-yellow").wrap("<div class='tint-yellow'></div>");
$(".overlay-red").wrap("<div class='tint-red'></div>");
$(".overlay-purple").wrap("<div class='tint-purple'></div>");
$(".overlay-green").wrap("<div class='tint-green'></div>");
$(".overlay-dark").wrap("<div class='tint-dark'></div>");
$(".overlay-white").wrap("<div class='tint-white'></div>");
$(".overlay-blue-hover").wrap("<div class='tint-blue-hover'></div>");
$(".overlay-yellow-hover").wrap("<div class='tint-yellow-hover'></div>");
$(".overlay-red-hover").wrap("<div class='tint-red-hover'></div>");
$(".overlay-purple-hover").wrap("<div class='tint-purple-hover'></div>");
$(".overlay-green-hover").wrap("<div class='tint-green-hover'></div>");
$(".overlay-dark-hover").wrap("<div class='tint-dark-hover'></div>");
$(".overlay-white-hover").wrap("<div class='tint-white-hover'></div>");
$(".overlay-orange-hover").wrap("<div class='tint-orange-hover'></div>");

// Insert styles on HEAD to run the color effect
function appendStyle(styles) {
  var css = document.createElement('style');
  css.type = 'text/css';

  if (css.styleSheet) css.styleSheet.cssText = styles;
  else css.appendChild(document.createTextNode(styles));

  document.getElementsByTagName("head")[0].appendChild(css);
}

var styles = '.tint-blue, .tint-yellow, .tint-red, .tint-purple, .tint-green, .tint-dark, .tint-white, .tint-orange, .tint-blue-hover:hover, .tint-yellow-hover:hover, .tint-red-hover:hover, .tint-purple-hover:hover, .tint-green-hover:hover, .tint-dark-hover:hover, .tint-white-hover:hover, .tint-orange-hover:hover {position: relative;float: left;}.tint-blue:before, .tint-blue-hover:hover:before {background: rgba(0,255,255, 0.3);}.tint-yellow:before, .tint-yellow-hover:hover:before {background: rgba(255,255,0, 0.3);}.tint-red:before, .tint-red-hover:hover:before {background: rgba(255,0,0, 0.3);}.tint-purple:before, .tint-purple-hover:hover:before {background: rgba(255,0,255, 0.3);}.tint-green:before, .tint-green-hover:hover:before {background: rgba(0,255,0, 0.3);}.tint-dark:before, .tint-dark-hover:hover:before {background: rgba(0,0,0, 0.3);}.tint-white:before, .tint-white-hover:hover:before {background: rgba(255,255,255, 0.3);}.tint-orange:before, .tint-orange-hover:hover:before {background: rgba(255,123,0, 0.3);}.tint-blue:before, .tint-yellow:before, .tint-red:before, .tint-purple:before, .tint-green:before, .tint-dark:before, .tint-white:before, .tint-orange:before, .tint-blue-hover:hover:before, .tint-yellow-hover:hover:before, .tint-red-hover:hover:before, .tint-purple-hover:hover:before, .tint-green-hover:hover:before, .tint-dark-hover:hover:before, .tint-white-hover:hover:before, .tint-orange-hover:hover:before {content: "";display: block;position: absolute;top: 0;bottom: 0;left: 0;right: 0;-moz-transition: background .3s linear;-webkit-transition: background .3s linear;-ms-transition: background .3s linear;-o-transition: background .3s linear;transition: background .3s linear;}';

window.onload = function() { appendStyle(styles) };