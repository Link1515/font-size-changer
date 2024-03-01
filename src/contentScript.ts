const zoom = localStorage.getItem('zoomHelperZoom');

if (zoom) {
  const duration = 500;

  document.body.style.transition = `scale ${duration}ms`;
  document.body.style.transformOrigin = 'top';
  document.body.style.scale = zoom;

  setTimeout(() => {
    document.body.style.transition = '';
    document.body.style.scale = '';
    document.body.style.transformOrigin = '';

    document.body.style.zoom = zoom;
  }, duration);
}
