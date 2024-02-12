export const modifyZoom = (flag: 'increase' | 'decrease' | 'reset') => {
  if (!document.body.style.zoom) {
    document.body.style.zoom = '1';
  }

  const currentZoom = parseFloat(document.body.style.zoom);

  if (flag === 'increase') {
    document.body.style.zoom = (currentZoom + 0.1).toString();
    return;
  }

  if (flag === 'decrease') {
    document.body.style.zoom = (currentZoom - 0.1).toString();
    return;
  }

  if (flag === 'reset') {
    document.body.style.zoom = '1';
    return;
  }
};
