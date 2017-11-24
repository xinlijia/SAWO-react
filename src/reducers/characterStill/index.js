import * as reducerType from '../../util/reducerType';
import { lastRecord } from '../../util/const';

// const initState = true;

const initState = lastRecord && lastRecord.characterStill !== undefined ?
lastRecord.characterStill : true;

const characterStill = (state = initState, action) => {
  switch (action.type) {
    case reducerType.CHARACTERSTILL:
      return action.data;
    default:
      return state;
  }
};

export default characterStill;
