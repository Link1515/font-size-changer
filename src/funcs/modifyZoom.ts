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

  if (zoomString === '1') {
    document.body.style.zoom = '';
    localStorage.removeItem('zoomHelperZoom');
  } else {
    document.body.style.zoom = zoomString;
    localStorage.setItem('zoomHelperZoom', zoomString);
  }

  return zoomString;
};
