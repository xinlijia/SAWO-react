import { List } from 'immutable';
import * as reducerType from '../../util/reducerType';
import { lastRecord } from '../../util/const';

const initState = lastRecord && Array.isArray(lastRecord.characterPos) &&
lastRecord.characterPos[0] <= 200 &&
lastRecord.characterPos[0] >= 0 &&
lastRecord.characterPos[1] <= 200 &&
lastRecord.characterPos[1] >= 0 ?
List(lastRecord.characterPos) : List([100, 100]);

const characterPos = (state = initState, action) => {
  switch (action.type) {
    case reducerType.CHARACTERPOS:
      return action.data;
    default:
      return state;
  }
};

export default characterPos;
