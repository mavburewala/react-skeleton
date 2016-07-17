/*
 * HomeReducer
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
  SET_CURRENT_QUESTIONNAIRE_ID,
  SET_MAIN_SECTION,
  SET_SUB_SECTION
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  currentQuestionnaireId: '',
  mainSection:'',
  subSection: ''
});

function sectionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_QUESTIONNAIRE_ID:
      return state
        .set('currentQuestionnaireId', action.questionnaireId);
    case SET_MAIN_SECTION:
      return state
        .set('mainSection', action.mainSection);
    case SET_SUB_SECTION:
      return state
        .set('subSection', action.subSection);
    default:
      return state;
  }
}

export default sectionReducer;
