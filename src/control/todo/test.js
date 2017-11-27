import event from '../../util/event';
import actions from '../../actions';
// import states from '../states';
import mainScene from '../mainScene';


const down = (store) => {
  store.dispatch(actions.keyboard.test(true));
  event.down({
    key: 'test',
    begin: 0,
    interval: 5,
    callback: () => {
      mainScene.mazeUpdate(store, 1);
    },
  });
};

const up = (store) => {
  store.dispatch(actions.keyboard.test(false));
  event.up({
    key: 'test',
    callback: () => {
      mainScene.mazeUpdate(store, 0);
    },
  });
};

export default {
  down,
  up,
};
