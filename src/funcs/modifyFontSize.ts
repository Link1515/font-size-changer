export const modifyFontSize = (flag: 'increase' | 'decrease') => {
  const allElements = document.body.querySelectorAll('*');
  allElements.forEach((element) => {
    if (!(element instanceof HTMLElement)) return;

    const step = flag === 'increase' ? 2 : -2;
    const currentFontSize = element.style.fontSize;
    element.style.fontSize = currentFontSize
      ? `${parseInt(currentFontSize) + step}px`
      : '16px';
  });
};
