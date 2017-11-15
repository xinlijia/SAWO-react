import * as reducerType from '../../unit/reducerType';
import { lastRecord } from '../../unit/const';

let initState = lastRecord && !isNaN(parseInt(lastRecord.save1, 10)) ?
  parseInt(lastRecord.save1, 10) : 0;
if (initState < 0) {
  initState = 0;
}

const save1 = (state = initState, action) => {
  switch (action.type) {
    case reducerType.SAVE1:
      return action.data;
    default:
      return state;
  }
};

export default save1;
