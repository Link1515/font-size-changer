export const modifyZoom = (flag: 'increase' | 'decrease' | 'reset') => {
  const currentZoom = parseFloat(document.body.style.zoom || '1');

  switch (flag) {
    case 'increase':
      document.body.style.zoom = (currentZoom + 0.1).toString();
      break;
    case 'decrease':
      document.body.style.zoom = (currentZoom - 0.1).toString();
      break;
    case 'reset':
      document.body.style.zoom = '';
      break;
  }

  if (document.body.style.zoom === '1') {
    document.body.style.zoom = '';
  }

  !document.body.style.zoom
    ? localStorage.removeItem('zoomHelperZoom')
    : localStorage.setItem('zoomHelperZoom', document.body.style.zoom);

  return document.body.style.zoom;
};
