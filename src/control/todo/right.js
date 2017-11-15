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
      states.right();
      console.log('right');
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
