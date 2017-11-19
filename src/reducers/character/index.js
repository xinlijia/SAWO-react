import { List } from 'immutable';
import * as reducerType from '../../unit/reducerType';
import { initCharacter, lastRecord } from '../../unit/const';

const initState = lastRecord && Array.isArray(lastRecord.character) ?
  List(lastRecord.character.map(e => List(e))) : initCharacter;

const matrix = (state = initState, action) => {
  switch (action.type) {
    case reducerType.Character:
      return action.data;
    default:
      return state;
  }
};

export default character;
