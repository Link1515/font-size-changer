const zoom = localStorage.getItem('zoomHelperZoom');

if (zoom) {
  document.body.style.zoom = zoom;
}
