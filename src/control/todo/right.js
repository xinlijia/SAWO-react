import event from '../../unit/event';
import actions from '../../actions';
import states from '../states';


const down = (store) => {
  store.dispatch(actions.keyboard.right(true));
  event.down({
    key: 'right',
    begin: 200,
    interval: 100,
    callback: () => {
      // const state = store.getState();
      // let saves = state.get('saves');
      // saves = saves.set(0, -3);
      // saves = saves.set(1, 3);
      // states.update(saves);
      states.right();
    },
  });
};

const up = (store) => {
  store.dispatch(actions.keyboard.right(false));
  event.up({
    key: 'right',
  });
};

export default {
  down,
  up,
};
