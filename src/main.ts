import '~/style.css';
import { getHtmlElement } from '~/utils';
import { modifyFontSize } from '~/funcs';
import { inertScrtiptToActiveTab } from '~/chromeService';

const increaseBtnEl = getHtmlElement<HTMLButtonElement>('#increaseBtn');

increaseBtnEl.addEventListener('click', async () => {
  inertScrtiptToActiveTab(modifyFontSize, ['increase']);
});

const decreaseBtnEl = getHtmlElement<HTMLButtonElement>('#decreaseBtn');

decreaseBtnEl.addEventListener('click', async () => {
  inertScrtiptToActiveTab(modifyFontSize, ['decrease']);
});
