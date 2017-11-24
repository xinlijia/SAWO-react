import event from '../../util/event';
import actions from '../../actions';
import states from '../states';

const down = (store) => {
  store.dispatch(actions.keyboard.down(true));
  event.down({
    key: 'down',
    begin: 0,
    interval: 5,
    callback: () => {
      states.update();
    },
  });
};

const up = (store) => {
  store.dispatch(actions.keyboard.down(false));
  event.up({
    key: 'down',
    callback: () => {
      states.update();
    },
  });
};

export default {
  down,
  up,
};
