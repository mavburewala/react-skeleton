/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  LOAD_QUESTIONNAIRE_LIST,
  LOAD_QUESTIONNAIRE_LIST_SUCCESS,
  LOAD_QUESTIONNAIRE_LIST_ERROR,

  GENERATE_TEST_QUESTIONNAIRE,
  GENERATE_TEST_QUESTIONNAIRE_SUCCESS,
  GENERATE_TEST_QUESTIONNAIRE_ERROR,
} from './constants';
import { fromJS } from 'immutable';

var update = require('react/lib/update')

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  appData: fromJS({
    questionnaireList: false,
  }),
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUESTIONNAIRE_LIST:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['appData', 'questionnaireList'], false);
    case LOAD_QUESTIONNAIRE_LIST_SUCCESS:
      return state
        .setIn(['appData', 'questionnaireList'], action.questionnaireList)
        .set('loading', false);
    case LOAD_QUESTIONNAIRE_LIST_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case GENERATE_TEST_QUESTIONNAIRE:
      return state
        .set('loading', true)
        .set('error', false);
    case GENERATE_TEST_QUESTIONNAIRE_SUCCESS:
      state.updateIn(['appData', 'questionnaireList'], list => list.push(action.questionnaire))
      console.log("koko: ", state.getIn(['appData', 'questionnaireList']));
      return state
        .set('loading', false)
        .updateIn(['appData', 'questionnaireList'], list => list.push(action.questionnaire));
    case GENERATE_TEST_QUESTIONNAIRE_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
