import {
  LOAD_QUESTIONNAIRE_LIST,
  LOAD_QUESTIONNAIRE_LIST_SUCCESS,
  LOAD_QUESTIONNAIRE_LIST_ERROR,

  GENERATE_TEST_QUESTIONNAIRE,
  GENERATE_TEST_QUESTIONNAIRE_SUCCESS,
  GENERATE_TEST_QUESTIONNAIRE_ERROR,

  ANSWER_UPDATED,
  APPROVE_UPDATED
} from './constants';
import { fromJS, List } from 'immutable';

import _ from 'underscore';

var update = require('react/lib/update')

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  appData: fromJS({
    questionnaireList:  [],
  }),
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUESTIONNAIRE_LIST:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['appData', 'questionnaireList'],  []);
    case LOAD_QUESTIONNAIRE_LIST_SUCCESS:
      return state
        .setIn(['appData', 'questionnaireList'], action.questionnaireList)
        .set('loading', false);
    case LOAD_QUESTIONNAIRE_LIST_ERROR:
      return state
        .set('error', action.error)
        .set('loading',  []);
    case GENERATE_TEST_QUESTIONNAIRE:
      return state
        .set('loading', true)
        .set('error', false);
    case GENERATE_TEST_QUESTIONNAIRE_SUCCESS:
      return state
        .set('loading', false)
        .updateIn(['appData', 'questionnaireList'], list => list.push(action.questionnaire));
    case GENERATE_TEST_QUESTIONNAIRE_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case ANSWER_UPDATED:
      var questionnaire = state.getIn(['appData', 'questionnaireList', action.questionnaireIndex])
      var questionIndex = _.findIndex(questionnaire.oQuestionList, (question) => question.sId === action.questionId );
      questionnaire.oQuestionList[questionIndex].sAnswer = action.answer;
      return state
        .setIn(['appData', 'questionnaireList', action.questionnaireIndex], Object.assign({}, questionnaire));
    case APPROVE_UPDATED:
      var questionnaire = state.getIn(['appData', 'questionnaireList', action.questionnaireIndex])
      var questionIndex = _.findIndex(questionnaire.oQuestionList, (question) => question.sId === action.questionId );
      questionnaire.oQuestionList[questionIndex].bApproved = action.answer;
      return state
        .setIn(['appData', 'questionnaireList', action.questionnaireIndex], Object.assign({},questionnaire));
    default:
      return state;
  }
}

export default appReducer;
