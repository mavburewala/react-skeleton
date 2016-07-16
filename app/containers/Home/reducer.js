

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  username: '',
});

function homeReducer(state = initialState, action) {
  return state
}

export default homeReducer;
