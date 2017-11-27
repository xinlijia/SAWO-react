import * as reducerType from '../../util/reducerType';
import { lastRecord } from '../../util/const';

const initState = lastRecord && Array.isArray(lastRecord.timelineMoves) ?
List(lastRecord.timelineMoves) : List([]);
// array that store the moves in timeline
// TODO: consider combine with movebar moves

const timelineMoves = (state = initState, action) => {
  switch (action.type) {
    case reducerType.TIMELINEMOVES:
      return action.data;
    default:
      return state;
  }
};

export default timelineMoves;
