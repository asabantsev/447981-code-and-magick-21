'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARDS_COUNT = 4;

let setup = document.querySelector(`.setup`);
let setupSimilar = document.querySelector(`.setup-similar`);
setup.classList.remove(`hidden`);
setupSimilar.classList.remove(`hidden`);

let similarListElement = document.querySelector(`.setup-similar-list`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

let getRandomItem = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

let getWizardsArray = function (lenght) {
  let array = [];

  for (let i = 1; i <= lenght; i++) {
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

similarListElement.appendChild(fragment);
