import { collideRect } from '../util/functions';
import actions from '../actions';

const mainScene = {
  characterUpdate: (store) => {
    const state = store.getState();
    const keyboard = state.get('keyboard');
    // const maze = state.get('maze');
    console.log(collideRect({ top: 10, left: 10, width: 15, height: 15 },
      { top: 15, left: 20, width: 15, height: 15 }));
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

export default mainScene;
