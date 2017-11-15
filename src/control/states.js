// import { List } from 'immutable';
import store from '../store';
import actions from '../actions';


const states = {

  start: () => {
    // const state = store.getState();
    states.dispatchSave(0);
    states.auto();
  },

  auto: () => {
     // const state = store.getState();
  },

  left: () => {
    const addSave = store.getState().get('save') + 10;
    states.dispatchSave(addSave);
  },
  right: () => {
    const addSave = store.getState().get('save') - 10;
    states.dispatchSave(addSave);
  },

  dispatchSave: (save) => {
    store.dispatch(actions.save(save));
  },
};

export default states;
