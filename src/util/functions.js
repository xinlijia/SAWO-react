function collideRect(rect1, rect2) {
  return (rect1.left < rect2.left + rect2.width &&
     rect1.left + rect1.width > rect2.left &&
     rect1.top < rect2.top + rect2.height &&
     rect1.height + rect1.top > rect2.top);
}

function collideList(list, rect0) {
  let i;
  for (i = 0; i < list.length; i++) {
    if (collideRect(list[i], rect0)) {
      return i;
    }
  }
  return -1;
}


module.exports = {
  collideRect,
  collideList,
};
