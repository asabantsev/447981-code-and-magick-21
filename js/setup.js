'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const WIZARDS_COUNT = 4;

let setup = document.querySelector(`.setup`);
let setupSimilar = document.querySelector(`.setup-similar`);
setupSimilar.classList.remove(`hidden`);

let similarListElement = document.querySelector(`.setup-similar-list`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

let getRandomItem = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

let getWizardsArray = function (length) {
  let array = [];

  for (let i = 1; i <= length; i++) {
    array.push({
      name: WIZARD_NAMES[getRandomItem(0, WIZARD_NAMES.length)],
      surname: WIZARD_SURNAMES[getRandomItem(0, WIZARD_SURNAMES.length)],
      coatColor: WIZARD_COAT_COLOR[getRandomItem(0, WIZARD_COAT_COLOR.length)],
      eyesColor: WIZARD_EYES_COLOR[getRandomItem(0, WIZARD_EYES_COLOR.length)],
    });
  }

  return array;
};

let wizards = getWizardsArray(WIZARDS_COUNT);

let renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name + ` ` + wizard.surname;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

let fragment = document.createDocumentFragment();

for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.textContent = ``;
similarListElement.appendChild(fragment);

// Открытие/закрытие окна настройки персонажа
let setupOpen = document.querySelector(`.setup-open`);
let setupClose = setup.querySelector(`.setup-close`);
let setupForm = document.querySelector(`.setup-wizard-form`);

let onPopupEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    setup.classList.add(`hidden`);
  }
};

let onPopupEnterPress = function (evt) {
  if (evt.key === `Enter`) {
    evt.preventDefault();
    setup.classList.add(`hidden`);
    setupForm.submit();
  }
};

let openPopup = function () {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
  document.addEventListener(`keydown`, onPopupEnterPress);
};

let closePopup = function () {
  setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

// Изменение цвета мантии и глаз персонажа и цвета фаерболов по нажатию
let setupWizard = document.querySelector(`.setup-wizard`);
let wizardCoat = setupWizard.querySelector(`.wizard-coat`);
let wizardCoatInput = document.querySelector(`input[name="coat-color"]`);
let wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
let wizardEyesInput = document.querySelector(`input[name="eyes-color"]`);
let wizardFireball = document.querySelector(`.setup-fireball-wrap`);
let wizardFireballInput = document.querySelector(`input[name="fireball-color"]`);

wizardCoat.addEventListener(`click`, function () {
  let getRandomCoatColor = WIZARD_COAT_COLOR[getRandomItem(0, WIZARD_COAT_COLOR.length)];
  wizardCoat.style.fill = getRandomCoatColor;
  wizardCoatInput.value = getRandomCoatColor;
});

wizardEyes.addEventListener(`click`, function () {
  let getRandomEyesColor = WIZARD_EYES_COLOR[getRandomItem(0, WIZARD_EYES_COLOR.length)];
  wizardEyes.style.fill = getRandomEyesColor;
  wizardEyesInput.value = getRandomEyesColor;
});

wizardFireball.addEventListener(`click`, function () {
  let getRandomFireballColor = WIZARD_FIREBALL_COLOR[getRandomItem(0, WIZARD_FIREBALL_COLOR.length)];
  wizardFireball.style.background = getRandomFireballColor;
  wizardFireballInput.value = getRandomFireballColor;
});
