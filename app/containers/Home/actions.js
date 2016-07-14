/*
 * Home Actions
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
  CHANGE_USERNAME,

  LOAD_QUESTIONNAIRE_LIST,
  LOAD_QUESTIONNAIRE_LIST_SUCCESS,
  LOAD_QUESTIONNAIRE_LIST_ERROR,
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
 * Dispatched when the questionnaire list is loaded
 *
 * @param  {array}  list of questionnaire
 *
 * @return {array}      An action object with a type of LOAD_QUESTIONNAIRE_LIST_SUCCESS passing the questionaireList
 */
export function questionnaireLoaded(questionaireList) {
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
export function questionnaireLoadingError(error) {
  return {
    type: LOAD_QUESTIONNAIRE_LIST_ERROR,
    error,
  };
}



/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}
