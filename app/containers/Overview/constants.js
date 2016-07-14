/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CREATE_NEW_QUESTIONNAIRE = 'royalsatwork/Home/CREATE_NEW_QUESTIONNAIRE';
export const CREATE_NEW_QUESTIONNAIRE_SUCCESS = 'royalsatwork/Home/CREATE_NEW_QUESTIONNAIRE_SUCCESS';
export const CREATE_NEW_QUESTIONNAIRE_ERROR = 'royalsatwork/Home/CREATE_NEW_QUESTIONNAIRE_ERROR';

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
