'use strict';

(function () {
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

  let getWizardsArray = function (length) {
    let array = [];

    for (let i = 1; i <= length; i++) {
      array.push({
        name: WIZARD_NAMES[window.util.getRandomItem(0, WIZARD_NAMES.length)],
        surname: WIZARD_SURNAMES[window.util.getRandomItem(0, WIZARD_SURNAMES.length)],
        coatColor: WIZARD_COAT_COLOR[window.util.getRandomItem(0, WIZARD_COAT_COLOR.length)],
        eyesColor: WIZARD_EYES_COLOR[window.util.getRandomItem(0, WIZARD_EYES_COLOR.length)],
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

  let setupWizard = setup.querySelector(`.setup-wizard`);
  let wizardCoat = setupWizard.querySelector(`.wizard-coat`);
  let wizardCoatInput = setup.querySelector(`input[name="coat-color"]`);
  let wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
  let wizardEyesInput = setup.querySelector(`input[name="eyes-color"]`);
  let wizardFireball = setup.querySelector(`.setup-fireball-wrap`);
  let wizardFireballInput = setup.querySelector(`input[name="fireball-color"]`);

  window.colorize(wizardCoat, wizardCoatInput, WIZARD_COAT_COLOR);
  window.colorize(wizardEyes, wizardEyesInput, WIZARD_EYES_COLOR);
  window.colorize(wizardFireball, wizardFireballInput, WIZARD_FIREBALL_COLOR);
})();
