'use strict';

(function () {
  let setup = document.querySelector(`.setup`);
  let setupOpen = document.querySelector(`.setup-open`);
  let setupClose = setup.querySelector(`.setup-close`);

  let onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  let openPopup = function () {
    setup.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onPopupEscPress);
  };

  let closePopup = function () {
    setup.classList.add(`hidden`);
    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener(`click`, function () {
    closePopup();
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    window.util.isEscEvent(evt, closePopup);
  });

  // let dialogHandle = setup.querySelector(`.upload`);

  // dialogHandle.addEventListener(`mousedown`, function (evt) {
  //   evt.preventDefault();

  //   let startCooords = {
  //     x: evt.clientX,
  //     y: evt.clientY,
  //   };

  //   let onMouseMove = function (moveEvt) {
  //     let shift = {
  //       x: startCooords.x - moveEvt.clientX,
  //       y: startCooords.y - moveEvt.clientY,
  //     };

  //     startCooords = {
  //       x: moveEvt.clientX,
  //       y: moveEvt.clientY,
  //     };
  //     setup.style.top = (setup.offsetTop - shift.y) + `px`;
  //     setup.style.left = (setup.offsetLeft - shift.x) + `px`;
  //   };

  //   let onMouseUp = function (upEvt) {
  //     upEvt.preventDefault();

  //     document.removeEventListener(`mousemove`, onMouseMove);
  //     document.removeEventListener(`mouseup`, onMouseUp);
  //   };

  //   document.addEventListener(`mousemove`, onMouseMove);
  //   document.addEventListener(`mouseup`, onMouseUp);
  // });
})();
