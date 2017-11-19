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
      const state = store.getState();
      let pos = state.get('pos');
      pos = pos.set(1, pos.get(1) + 10);
      states.updatePos(pos);
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
