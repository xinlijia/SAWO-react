import * as reducerType from '../../util/reducerType';
import { lastRecord } from '../../util/const';
// const initState = 0;

const initState = lastRecord ? lastRecord.characterDir : 'down';

const characterDir = (state = initState, action) => {
  switch (action.type) {
    case reducerType.CHARACTERDIR:
      return action.data;
    default:
      return state;
  }
};

export default characterDir;
