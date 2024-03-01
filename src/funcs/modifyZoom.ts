export const modifyZoom = (flag: 'increase' | 'decrease' | 'reset') => {
  if (!document.body.style.zoom) {
    document.body.style.zoom = '1';
  }

  const currentZoom = parseFloat(document.body.style.zoom);

  switch (flag) {
    case 'increase':
      document.body.style.zoom = (currentZoom + 0.1).toString();
      break;
    case 'decrease':
      document.body.style.zoom = (currentZoom - 0.1).toString();
      break;
    case 'reset':
      document.body.style.zoom = '1';
      break;
  }

  return document.body.style.zoom;
};
