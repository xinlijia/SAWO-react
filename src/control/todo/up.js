import event from '../../util/event';
import actions from '../../actions';
import mainScene from '../mainScene';


const down = (store) => {
  store.dispatch(actions.keyboard.up(true));
  event.down({
    key: 'up',
    begin: 0,
    interval: 5,
    callback: () => {
      mainScene.characterUpdate(store);
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
