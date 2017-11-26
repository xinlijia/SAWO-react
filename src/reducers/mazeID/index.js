import * as reducerType from '../../util/reducerType';
import { lastRecord } from '../../util/const';

const initState = lastRecord && lastRecord.mazeID !== undefined ?
lastRecord.mazeID : 0;

const mazeID = (state = initState, action) => {
  switch (action.type) {
    case reducerType.MAZEID:
      return action.data;
    default:
      return state;
  }
};

export default mazeID;
