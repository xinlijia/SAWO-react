import { collideRect, collideList } from '../util/functions';
import actions from '../actions';
import mazeData from '../resource/maze/maze.json';

const mainScene = {
  characterUpdate: (store) => {
    const state = store.getState();
    const keyboard = state.get('keyboard');
    const bricks = mazeData.maze[1].brick;
    let pos = state.get('characterPos');

    if (keyboard.get('up')) {
      pos = mainScene.moveSingleAxis(0, -1, bricks, pos);
    }
    if (keyboard.get('down')) {
      pos = mainScene.moveSingleAxis(0, 1, bricks, pos);
    }
    if (keyboard.get('left')) {
      pos = mainScene.moveSingleAxis(-1, 0, bricks, pos);
    }
    if (keyboard.get('right')) {
      pos = mainScene.moveSingleAxis(1, 0, bricks, pos);
    }
    // console.log(pos.get(0));
    // console.log(pos.get(1));

    store.dispatch(actions.characterPos(pos));
  },

  moveSingleAxis: (dx, dy, bricks, pos) => {
    let i;
    let b;
    let res = pos;
    res = res.set(0, res.get(0) + dy);
    res = res.set(1, res.get(1) + dx);
    const characterRect = { top: res.get(0), left: res.get(1), width: 8, height: 8 };

    for (i = 0; i < bricks.length; i++) {
      b = bricks[i];
      if (collideRect(b, characterRect)) {
        if (dx > 0) {
          res = res.set(1, b.left - characterRect.width);
        } else if (dx < 0) {
          res = res.set(1, b.left + b.width);
        }
        if (dy > 0) {
          res = res.set(0, b.top - characterRect.height);
        } else if (dy < 0) {
          res = res.set(0, b.top + b.height);
        }
      }
    }
    return res;
  },
  test: () => {
    console.log(collideRect({ top: 10, left: 10, width: 15, height: 15 },
      { top: 10, left: 10, width: 15, height: 15 }));
    const bricks = [{ top: 10, left: 10, width: 15, height: 15 }];
    console.log(collideList(bricks, { top: 10, left: 10, width: 15, height: 15 }));
  },
};


export default mainScene;
