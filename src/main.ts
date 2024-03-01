import '~/style.css';
import { getHtmlElement } from '~/utils';
import { modifyZoom } from '~/funcs';
import { insertScrtiptToActiveTab } from '~/chromeService';
import iconPlus from '~/assets/images/icons/plus.svg';
import iconMinus from '~/assets/images/icons/minus.svg';
import iconReset from '~/assets/images/icons/reset.svg';

const zoomDisplayEl = getHtmlElement('#zoomDisplay');
const initializeZoomDisplay = async () => {
  const zoom = await insertScrtiptToActiveTab(
    () => document.body.style.zoom || '1',
  );
  zoomDisplayEl.innerText = zoom;
};
initializeZoomDisplay();

const increaseBtnEl = getHtmlElement<HTMLButtonElement>('#increaseBtn');
const plusImgEl = document.createElement('img');
plusImgEl.src = iconPlus;
increaseBtnEl.appendChild(plusImgEl);

increaseBtnEl.addEventListener('click', async () => {
  const zoom = await insertScrtiptToActiveTab(modifyZoom, ['increase']);
  zoomDisplayEl.innerText = zoom || '1';
});

const decreaseBtnEl = getHtmlElement<HTMLButtonElement>('#decreaseBtn');
const minusImgEl = document.createElement('img');
minusImgEl.src = iconMinus;
decreaseBtnEl.appendChild(minusImgEl);

decreaseBtnEl.addEventListener('click', async () => {
  const zoom = await insertScrtiptToActiveTab(modifyZoom, ['decrease']);
  zoomDisplayEl.innerText = zoom || '1';
});

const resetBtnEl = getHtmlElement<HTMLButtonElement>('#resetBtn');
const resetImgEl = document.createElement('img');
resetImgEl.src = iconReset;
resetBtnEl.appendChild(resetImgEl);

resetBtnEl.addEventListener('click', () => {
  insertScrtiptToActiveTab(modifyZoom, ['reset']);
  zoomDisplayEl.innerText = '1';
});
