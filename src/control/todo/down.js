import event from '../../unit/event';
import actions from '../../actions';
import states from '../states';


const down = (store) => {
  store.dispatch(actions.keyboard.down(true));
  event.down({
    key: 'down',
    begin: 200,
    interval: 5,
    callback: () => {
      states.characterUpdate();
    },
  });
};

const up = (store) => {
  store.dispatch(actions.keyboard.down(false));
  event.up({
    key: 'down',
  });
};

export default {
  down,
  up,
};
