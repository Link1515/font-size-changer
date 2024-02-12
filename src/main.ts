import '~/style.css';
import { getHtmlElement } from '~/utils';
import { modifyFontSize } from '~/funcs';
import { inertScrtiptToAllTabs } from '~/chromeService';

const increaseBtnEl = getHtmlElement<HTMLButtonElement>('#increaseBtn');

increaseBtnEl.addEventListener('click', async () => {
  inertScrtiptToAllTabs(modifyFontSize, ['increase']);
});

const decreaseBtnEl = getHtmlElement<HTMLButtonElement>('#decreaseBtn');

decreaseBtnEl.addEventListener('click', async () => {
  inertScrtiptToAllTabs(modifyFontSize, ['decrease']);
});
