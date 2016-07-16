import {
  SET_CURRENT_QUESTIONNAIRE_ID,

} from './constants';


export function setCurrentQuestionId(questionnaireId) {
  return {
    type: SET_CURRENT_QUESTIONNAIRE_ID,
    questionnaireId
  };
}
