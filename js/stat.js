'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 20;
const BAR_GAP = 50;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let renderText = function (ctx, text, y) {
  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(text, CLOUD_X + FONT_GAP, y);
};

let getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

let getRandomSaturation = function (min, max) {
  return Math.random() * (max - min) + min;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  renderText(ctx, `Ура вы победили!`, CLOUD_Y + FONT_GAP);
  renderText(ctx, `Список результатов:`, CLOUD_Y + (FONT_GAP * 2));

  let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    if (players[i] === `Вы`) {
      ctx.fillStyle = `hsl(0, 100%, 50%)`;
    } else {
      ctx.fillStyle = `hsl(240, ` + getRandomSaturation(0, 100) + `%, 27%)`;
    }

    ctx.fillRect(CLOUD_X + BAR_GAP + BAR_GAP * 2 * i, CLOUD_Y + (FONT_GAP * 4) + (BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime)), BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);

    ctx.fillStyle = `#000`;
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + BAR_GAP * 2 * i, CLOUD_Y + BAR_HEIGHT + (FONT_GAP * 4) + GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + BAR_GAP * 2 * i, CLOUD_Y + (FONT_GAP * 3) + (BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime)));
  }
};
