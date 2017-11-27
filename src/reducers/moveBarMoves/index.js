import * as reducerType from '../../util/reducerType';
import { lastRecord } from '../../util/const';

const initState = lastRecord && Array.isArray(lastRecord.moveBarMoves) ?
List(lastRecord.moveBarMoves) : List([]);
// array that store the moves in timeline

const moveBarMoves = (state = initState, action) => {
  switch (action.type) {
    case reducerType.MOVEBARMOVES:
      return action.data;
    default:
      return state;
  }
};

export default moveBarMoves;
