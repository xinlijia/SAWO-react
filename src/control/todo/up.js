import event from '../../unit/event';
import actions from '../../actions';
import states from '../states';


const down = (store) => {
  store.dispatch(actions.keyboard.up(true));
  event.down({
    key: 'up',
    begin: 200,
    interval: 5,
    callback: () => {
      states.characterUpdate();
    },
  });
};

const up = (store) => {
  store.dispatch(actions.keyboard.up(false));
  event.up({
    key: 'up',
  });
};

export default {
  down,
  up,
};
