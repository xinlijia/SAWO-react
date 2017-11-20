import { StorageKey } from './const';

const util = {
  subscribeRecord(store) { // 将状态记录到 localStorage
    store.subscribe(() => {
      let data = store.getState().toJS();
      data = JSON.stringify(data);
      data = encodeURIComponent(data);
      if (window.btoa) {
        data = btoa(data);
      }
      localStorage.setItem(StorageKey, data);
    });
  },
};

module.exports = util;
