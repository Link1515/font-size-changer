import '~/style.css';
import { getHtmlElement } from '~/utils';
import { modifyFontSize } from '~/funcs';
import {
  // insertScrtiptToActiveTab,
  inertScrtiptToAllTabs,
} from '~/chromeService';

const increaseBtnEl = getHtmlElement<HTMLButtonElement>('#increaseBtn');

increaseBtnEl.addEventListener('click', async () => {
  // insertScrtiptToActiveTab(modifyFontSize, ['increase']);
  inertScrtiptToAllTabs(modifyFontSize, ['increase']);
});

const decreaseBtnEl = getHtmlElement<HTMLButtonElement>('#decreaseBtn');

decreaseBtnEl.addEventListener('click', async () => {
  // insertScrtiptToActiveTab(modifyFontSize, ['decrease']);
  inertScrtiptToAllTabs(modifyFontSize, ['decrease']);
});
