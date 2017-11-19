import { List } from 'immutable';
import * as reducerType from '../../unit/reducerType';
import { lastRecord } from '../../unit/const';

const initState = lastRecord && Array.isArray(lastRecord.saves) ?
List(lastRecord.saves) : [0, 0];

const saves = (state = initState, action) => {
  switch (action.type) {
    case reducerType.SAVES:
      return action.data;
    default:
      return state;
  }
};

export default saves;
