import * as reducerType from '../../util/reducerType';

const initState = false;

const reducer = (state = initState, action) => {
  switch (action.type) {
    case reducerType.KEY_LEFT:
      return action.data;
    default:
      return state;
  }
};

export default reducer;
