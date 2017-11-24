import event from '../../util/event';
import actions from '../../actions';
import states from '../states';


const down = (store) => {
  store.dispatch(actions.keyboard.left(true));
  event.down({
    key: 'left',
    begin: 0,
    interval: 5,
    callback: () => {
      states.update();
    },
  });
};

const up = (store) => {
  store.dispatch(actions.keyboard.left(false));
  event.up({
    key: 'left',
    callback: () => {
      states.update();
    },
  });
};

export default {
  down,
  up,
};
