import event from '../../util/event';
import actions from '../../actions';
import states from '../states';


const down = (store) => {
  store.dispatch(actions.keyboard.right(true));
  event.down({
    key: 'right',
    begin: 0,
    interval: 5,
    callback: () => {
      states.update();
    },
  });
};

const up = (store) => {
  store.dispatch(actions.keyboard.right(false));
  event.up({
    key: 'right',
    callback: () => {
      states.update();
    },
  });
};

export default {
  down,
  up,
};
