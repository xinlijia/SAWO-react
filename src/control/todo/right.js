import event from '../../util/event';
import actions from '../../actions';
import mainScene from '../mainScene';


const down = (store) => {
  store.dispatch(actions.keyboard.right(true));
  event.down({
    key: 'right',
    begin: 0,
    interval: 5,
    callback: () => {
      mainScene.characterUpdate(store);
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
