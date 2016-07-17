/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */


export const LOAD_QUESTIONNAIRE_LIST = 'royalsatwork/App/LOAD_QUESTIONNAIRE_LIST';
export const LOAD_QUESTIONNAIRE_LIST_SUCCESS = 'royalsatwork/App/LOAD_QUESTIONNAIRE_LIST_SUCCESS';
export const LOAD_QUESTIONNAIRE_LIST_ERROR = 'royalsatwork/App/LOAD_QUESTIONNAIRE_LIST_ERROR';

export const GENERATE_TEST_QUESTIONNAIRE = 'royalsatwork/App/GENERATE_TEST_QUESTIONNAIRE';
export const GENERATE_TEST_QUESTIONNAIRE_SUCCESS = 'royalsatwork/App/GENERATE_TEST_QUESTIONNAIRE_SUCCESS';
export const GENERATE_TEST_QUESTIONNAIRE_ERROR = 'royalsatwork/App/GENERATE_TEST_QUESTIONNAIRE_ERROR';

export const ANSWER_UPDATED = 'royalsatwork/App/ANSWER_UPDATED';
export const APPROVE_UPDATED = 'royalsatwork/App/APPROVE_UPDATED';
