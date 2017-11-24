import event from '../../util/event';
import actions from '../../actions';
import states from '../states';


const down = (store) => {
  store.dispatch(actions.keyboard.up(true));
  event.down({
    key: 'up',
    begin: 0,
    interval: 5,
    callback: () => {
      states.update();
    },
  });
};

const up = (store) => {
  store.dispatch(actions.keyboard.up(false));
  event.up({
    key: 'up',
    callback: () => {
      states.update();
    },
  });
};

export default {
  down,
  up,
};
