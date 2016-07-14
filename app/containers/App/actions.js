/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_QUESTIONNAIRE_LIST,
  LOAD_QUESTIONNAIRE_LIST_SUCCESS,
  LOAD_QUESTIONNAIRE_LIST_ERROR,

  GENERATE_TEST_QUESTIONNAIRE,
  GENERATE_TEST_QUESTIONNAIRE_SUCCESS,
  GENERATE_TEST_QUESTIONNAIRE_ERROR,
} from './constants';


/**
 * Loads the list of questionnaires, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_QUESTIONNAIRE_LIST
 */
export function loadQuestionnaireList() {
  return {
    type: LOAD_QUESTIONNAIRE_LIST,
  };
}

/**
 * Dispatched when the  questionnaires list is loaded
 *
 * @param  {array}  questionnaire List
 *
 * @return {object}      An action object with a type of LOAD_QUESTIONNAIRE_LIST_SUCCESS passing the questionaireList
 */
export function questionnaireListLoaded(questionaireList) {
  return {
    type: LOAD_QUESTIONNAIRE_LIST_SUCCESS,
    questionaireList,
  };
}

/**
 * Dispatched when questionaire list load fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_QUESTIONNAIRE_LIST_ERROR passing the error
 */
export function questionnaireListLoadingError(error) {
  return {
    type: LOAD_QUESTIONNAIRE_LIST_ERROR,
    error,
  };
}


/**
 * Generates the test questionnaire
 *
 * @return {object} An action object with a type of GENERATE_TEST_QUESTIONNAIRE
 */
export function generateTestQuestionnaire() {
  return {
    type: GENERATE_TEST_QUESTIONNAIRE,
  };
}


/**
 * Dispatched when the test questionnaire is generated
 *
 * @param  {object} newly created questionnaire
 *
 * @return {object}      An action object with a type of GENERATE_TEST_QUESTIONNAIRE_SUCCESS passing the questionaire
 */
export function testQuestionnaireGenerated(questionaire) {
  return {
    type: GENERATE_TEST_QUESTIONNAIRE_SUCCESS,
    questionaire,
  };
}

/**
 * Dispatched when questionaire generation fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of GENERATE_TEST_QUESTIONNAIRE_ERROR passing the error
 */
export function testQuestionnaireGenerationError(error) {
  return {
    type: GENERATE_TEST_QUESTIONNAIRE_ERROR,
    error,
  };
}
