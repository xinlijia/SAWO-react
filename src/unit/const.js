// import { List } from 'immutable';

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

// const getParam = (param) => { // 获取浏览器参数 for language
//   const r = new RegExp(`\\?(?:.+&)?${param}=(.*?)(?:&.*)?$`);
//   const m = window.location.toString().match(r);
//   return m ? decodeURI(m[1]) : '';
// };

module.exports = {
  StorageKey,
  lastRecord,
};
