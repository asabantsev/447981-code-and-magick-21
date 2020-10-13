'use strict';

(function () {
  window.colorize = function (element, input, array) {
    element.addEventListener(`click`, function () {

      let color = array[window.util.getRandomItem(0, array.length)];

      if (element.tagName.toLowerCase() === `div`) {
        element.style.backgroundColor = color;
        input.value = color;
      } else {
        element.style.fill = color;
        input.value = color;
      }
    });
  };
})();
