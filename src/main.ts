import '~/style.css';
import { getHtmlElement } from '~/utils';
import { modifyZoom } from '~/funcs';
import { insertScrtiptToActiveTab } from '~/chromeService';

const zoomDisplayEl = getHtmlElement('#zoomDisplay');
const initializeZoomDisplay = async () => {
  const zoom = await insertScrtiptToActiveTab(
    () => document.body.style.zoom || '1',
  );
  zoomDisplayEl.innerText = zoom;
};
initializeZoomDisplay();

const increaseBtnEl = getHtmlElement<HTMLButtonElement>('#increaseBtn');
increaseBtnEl.addEventListener('click', async () => {
  const zoom = await insertScrtiptToActiveTab(modifyZoom, ['increase']);
  zoomDisplayEl.innerText = zoom || '1';
});

const decreaseBtnEl = getHtmlElement<HTMLButtonElement>('#decreaseBtn');
decreaseBtnEl.addEventListener('click', async () => {
  const zoom = await insertScrtiptToActiveTab(modifyZoom, ['decrease']);
  zoomDisplayEl.innerText = zoom || '1';
});

const resetBtnEl = getHtmlElement<HTMLButtonElement>('#resetBtn');
resetBtnEl.addEventListener('click', () => {
  insertScrtiptToActiveTab(modifyZoom, ['reset']);
  zoomDisplayEl.innerText = '1';
});
