import {
  SET_CURRENT_QUESTIONNAIRE_ID,
  SET_MAIN_SECTION,
  SET_SUB_SECTION
} from './constants';

export function setCurrentQuestionId(questionnaireId) {
  return {
    type: SET_CURRENT_QUESTIONNAIRE_ID,
    questionnaireId
  };
}

export function setMainSection(mainSection) {
  return {
    type: SET_MAIN_SECTION,
    mainSection
  };
}

export function setSubSection(subSection) {
  return {
    type: SET_SUB_SECTION,
    subSection
  };
}
