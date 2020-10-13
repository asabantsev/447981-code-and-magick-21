'use strict';

(function () {
  let setup = document.querySelector(`.setup`);
  let dialogHandle = setup.querySelector(`.upload`);

  dialogHandle.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let startCooords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    let dragged = false;

    let onMouseMove = function (moveEvt) {
      let shift = {
        x: startCooords.x - moveEvt.clientX,
        y: startCooords.y - moveEvt.clientY,
      };

      dragged = true;

      startCooords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };
      setup.style.top = (setup.offsetTop - shift.y) + `px`;
      setup.style.left = (setup.offsetLeft - shift.x) + `px`;
    };

    let onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);

      if (dragged) {
        let onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener(`click`, onClickPreventDefault);
        };
        dialogHandle.addEventListener(`click`, onClickPreventDefault);
      }
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });
})();
