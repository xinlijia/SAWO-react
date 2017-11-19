import event from '../../unit/event';
import actions from '../../actions';
import states from '../states';


const down = (store) => {
  store.dispatch(actions.keyboard.left(true));
  event.down({
    key: 'left',
    begin: 200,
    interval: 5,
    callback: () => {
      states.characterUpdate();
    },
  });
};

const up = (store) => {
  store.dispatch(actions.keyboard.left(false));
  event.up({
    key: 'left',
  });
};

export default {
  down,
  up,
};
