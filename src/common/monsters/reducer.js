import * as actions from './actions';
import Monster from './monster';
import {Record} from 'immutable';

const InitialState = Record({
  monster: new Monster
});
const initialState = new InitialState;

// Note how JSON from server is revived to immutable record.
const revive = ({newMonster}) => initialState.merge({
  monster: new Monster(newMonster)
});

export default function monstersReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {
    case actions.FETCH_MONSTER_SUCCESS:
    {
      return state.set('monster', new Monster(action.payload));
    }
  }

  return state;
}
