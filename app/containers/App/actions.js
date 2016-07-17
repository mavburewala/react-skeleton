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
export function questionnaireListLoaded(questionnaireList) {
  return {
    type: LOAD_QUESTIONNAIRE_LIST_SUCCESS,
    questionnaireList,
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
export function testQuestionnaireGenerated(questionnaire) {
  return {
    type: GENERATE_TEST_QUESTIONNAIRE_SUCCESS,
    questionnaire,
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


export function questionUpdate(questionnaireId, questionnaireIndex, questionId, answer) {
  return {
    type: ANSWER_UPDATED,
    questionnaireId,
    questionnaireIndex,
    questionId,
    answer,
  };
}

export function approveUpdate(questionnaireId, questionnaireIndex, questionId, answer) {
  return {
    type: APPROVE_UPDATED,
    questionnaireId,
    questionnaireIndex,
    questionId,
    answer,
  };
}
