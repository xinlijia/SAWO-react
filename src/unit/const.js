import { List } from 'immutable';

const StorageKey = 'SAWO_REACT';

const lastRecord = (() => { // 上一把的状态
  let data = localStorage.getItem(StorageKey);
  if (!data) {
    return false;
  }
  try {
    if (window.btoa) {
      data = atob(data);
    }
    data = decodeURIComponent(data);
    data = JSON.parse(data);
  } catch (e) {
    if (window.console || window.console.error) {
      window.console.error('读取记录错误:', e);
    }
    return false;
  }
  return data;
})();

const transform = (function () {
  const trans = ['transform', 'webkitTransform', 'msTransform', 'mozTransform', 'oTransform'];
  const body = document.body;
  return trans.filter((e) => body.style[e] !== undefined)[0];
}());

const initCharacter = List([0, 0]);

const blankSave = List([0, 0]);

module.exports = {
  StorageKey,
  lastRecord,
  blankSave,
  transform,
  initCharacter,
};
