// import { List } from 'immutable';
import store from '../store';
// import actions from '../actions';
import mainScene from './mainScene';

const states = {
  start: () => {
  },
  // update() is called every time there's event or scene on running
  update: () => {
    const state = store.getState();
    const sceneId = state.get('scene').get(0);
    console.log(sceneId);
    if (sceneId === 0) {
      states.mainSceneUpdate();
    }
  },
  mainSceneUpdate: () => {
    mainScene.characterUpdate(store);
  },

};

export default states;
