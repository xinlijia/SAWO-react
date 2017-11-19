import { List } from 'immutable';
import * as reducerType from '../../unit/reducerType';
import { lastRecord } from '../../unit/const';

let initState = lastRecord && !isNaN(parseInt(lastRecord.timelinePos, 10)) ?
  parseInt(lastRecord.timelinePos, 10) : 0;
if (initState < 0) {
  initState = 0;
}
const timelinePos = (state = initState, action) => {
  switch (action.type) {
    case reducerType.TIMELINEPOS:
      return action.data;
    default:
      return state;
  }
};

export default timelinePos;
