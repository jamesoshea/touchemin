const getTouchPos = (canvas, x, y) => {
  var rect = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / rect.width, // relationship bitmap vs. element for X
    scaleY = canvas.height / rect.height; // relationship bitmap vs. element for Y

  return {
    x: (x - rect.left) * scaleX, // scale mouse coordinates after they have
    y: (y - rect.top) * scaleY, // been adjusted to be relative to element
  };
};

export { getTouchPos };
