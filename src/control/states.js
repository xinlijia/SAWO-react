// import { List } from 'immutable';
import store from '../store';
import actions from '../actions';


const states = {
  start: () => {
    states.scene();
  },
  scene: () => {
    states.characterUpdate();
  },

  characterUpdate: () => {
    const state = store.getState();
    const keyboard = state.get('keyboard');
    // const maze = state.get('maze');
    let pos = state.get('characterPos');
    if (keyboard.get('up')) {
      pos = pos.set(0, pos.get(0) - 1);
    }
    if (keyboard.get('down')) {
      pos = pos.set(0, pos.get(0) + 1);
    }
    if (keyboard.get('left')) {
      pos = pos.set(1, pos.get(1) - 1);
    }
    if (keyboard.get('right')) {
      pos = pos.set(1, pos.get(1) + 1);
    }
    store.dispatch(actions.characterPos(pos));
  },


};

export default states;
