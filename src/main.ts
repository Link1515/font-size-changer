import '~/style.css';
import { getHtmlElement } from '~/utils';
import { modifyZoom } from '~/funcs';
import { insertScrtiptToActiveTab } from '~/chromeService';

const increaseBtnEl = getHtmlElement<HTMLButtonElement>('#increaseBtn');
increaseBtnEl.addEventListener('click', () => {
  insertScrtiptToActiveTab(modifyZoom, ['increase']);
});

const decreaseBtnEl = getHtmlElement<HTMLButtonElement>('#decreaseBtn');
decreaseBtnEl.addEventListener('click', () => {
  insertScrtiptToActiveTab(modifyZoom, ['decrease']);
});

const resetBtnEl = getHtmlElement<HTMLButtonElement>('#resetBtn');
resetBtnEl.addEventListener('click', () => {
  insertScrtiptToActiveTab(modifyZoom, ['reset']);
});
