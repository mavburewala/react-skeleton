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

  CREATE_NEW_QUESTIONNAIRE,
  CREATE_NEW_QUESTIONNAIRE_SUCCESS,
  CREATE_NEW_QUESTIONNAIRE_ERROR
} from './constants';


/**
 * Creates the new questionnaire, this action starts the request saga
 *
 * @return {object} An action object with a type of CREATE_NEW_QUESTIONNAIRE
 */
export function createNewQuestionnaire() {
  return {
    type: CREATE_NEW_QUESTIONNAIRE,
  };
}

/**
 * Dispatched when the new questionnaire is craeted
 *
 * @param  {object} newly created questionnaire
 *
 * @return {object}      An action object with a type of CREATE_NEW_QUESTIONNAIRE_SUCCESS passing the questionaire
 */
export function newQuestionnaireCreated(questionaire) {
  return {
    type: CREATE_NEW_QUESTIONNAIRE_SUCCESS,
    questionaire,
  };
}

/**
 * Dispatched when questionaire creation fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of CREATE_NEW_QUESTIONNAIRE_ERROR passing the error
 */
export function newQuestionnaireError(error) {
  return {
    type: CREATE_NEW_QUESTIONNAIRE_ERROR,
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
