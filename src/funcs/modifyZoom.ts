export const modifyZoom = (flag: 'increase' | 'decrease' | 'reset') => {
  let currentZoom = parseFloat(document.body.style.zoom || '1') * 10;

  switch (flag) {
    case 'increase':
      currentZoom++;
      break;
    case 'decrease':
      currentZoom--;
      break;
    case 'reset':
      currentZoom = 10;
      break;
  }

  const zoomString = (currentZoom / 10).toString();
  document.body.style.zoom = zoomString;

  currentZoom === 1
    ? localStorage.removeItem('zoomHelperZoom')
    : localStorage.setItem('zoomHelperZoom', zoomString);

  return zoomString;
};
