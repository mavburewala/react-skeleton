import {
  SET_CURRENT_QUESTIONNAIRE_ID,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  currentQuestionnaireId: '',
});

function overviewReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_QUESTIONNAIRE_ID:
      return state
        .set('currentQuestionnaireId', action.questionnaireId);
    default:
      return state;
  }
}

export default overviewReducer;
