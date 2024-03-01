import '~/style.css';
import { getHtmlElement } from '~/utils';
import { modifyZoom } from '~/funcs';
import { insertScrtiptToActiveTab } from '~/chromeService';
import iconPlus from '~/assets/images/icons/plus.svg';
import iconMinus from '~/assets/images/icons/minus.svg';
import iconReset from '~/assets/images/icons/reset.svg';

/**
 * ===================
 * handle zoom display
 * ===================
 */

const zoomDisplayEl = getHtmlElement('#zoomDisplay');
const initializeZoomDisplay = async () => {
  const zoom = await insertScrtiptToActiveTab(
    () => document.body.style.zoom || '1',
  );
  zoomDisplayEl.innerText = zoom;
};
initializeZoomDisplay();

/**
 * =============
 * handle buttons
 * =============
 */

const increaseBtnEl = getHtmlElement<HTMLButtonElement>('#increaseBtn');
const decreaseBtnEl = getHtmlElement<HTMLButtonElement>('#decreaseBtn');
const resetBtnEl = getHtmlElement<HTMLButtonElement>('#resetBtn');

// add button icon

const plusImgEl = document.createElement('img');
plusImgEl.src = iconPlus;
increaseBtnEl.appendChild(plusImgEl);

const minusImgEl = document.createElement('img');
minusImgEl.src = iconMinus;
decreaseBtnEl.appendChild(minusImgEl);

const resetImgEl = document.createElement('img');
resetImgEl.src = iconReset;
resetBtnEl.appendChild(resetImgEl);

// bind button action

increaseBtnEl.addEventListener('click', async () => {
  const zoom = await insertScrtiptToActiveTab(modifyZoom, ['increase']);
  zoomDisplayEl.innerText = zoom || '1';
});

decreaseBtnEl.addEventListener('click', async () => {
  const zoom = await insertScrtiptToActiveTab(modifyZoom, ['decrease']);
  zoomDisplayEl.innerText = zoom || '1';
});

resetBtnEl.addEventListener('click', () => {
  insertScrtiptToActiveTab(modifyZoom, ['reset']);
  zoomDisplayEl.innerText = '1';
});
