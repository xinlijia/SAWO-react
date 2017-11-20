import event from '../../util/event';
import actions from '../../actions';
import mainScene from '../mainScene';


const down = (store) => {
  store.dispatch(actions.keyboard.left(true));
  event.down({
    key: 'left',
    begin: 0,
    interval: 5,
    callback: () => {
      mainScene.characterUpdate(store);
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
