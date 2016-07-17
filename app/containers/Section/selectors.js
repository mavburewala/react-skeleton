/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

import _ from 'underscore';

import {
  selectQuestionnaireList
} from 'containers/App/selectors';

import {
  selectCurrentQuestionnaireMainSections
} from 'containers/Overview/selectors';


const selectSection = () => (state) => state.get('section');

const selectCurrentQuestionnaireId = () => createSelector(
  selectSection(),
  (selectState) => selectState.get('currentQuestionnaireId')
);

const selectCurrentQuestionnaire = () => createSelector(
  [selectQuestionnaireList(), selectCurrentQuestionnaireId()],
  (questionnaireList, questionnaireId) => _.find(questionnaireList, (questionnaire) => questionnaire.sId === questionnaireId )
);

const selectMainSection = () => createSelector(
  selectSection(),
  (selectState) => selectState.get('mainSection')
);

const selectSubSection = () => createSelector(
  selectSection(),
  (selectState) => selectState.get('subSection')
);

const selectQuestions = () => createSelector(
  [selectMainSection(),selectSubSection(),selectCurrentQuestionnaire()],
  (mainSection, subSection, questionnaire) => questionnaire? _.sortBy(_.filter(questionnaire.oQuestionList, (question)=> question.oSection.sMainSection === mainSection && question.oSection.sSubSection === subSection), (question) =>  question.oSection.iSequence): []
);


const selectSectionData = () => createSelector(
  [selectCurrentQuestionnaireId(), selectMainSection(),
    selectSubSection(), selectQuestions(), selectCurrentQuestionnaireMainSections()],
  (questionnaireId, mainSection, subSection, questions, sections) => ({
    questionnaireId: questionnaireId,
    mainSectionName: mainSection,
    subSectionName: subSection,
    questions: questions,
    questionsCount: questions.length,
    completedQuestionsCount: _.filter(questions, (question)=> question.sAnswer !== "" ).length,
    approvedQuestionsCount: _.filter(questions, (question)=> question.bApproved === true ).length,
    remarks: 0,
    subSectionsCount: sections.length,

  })
);



export {
  selectSection,
  selectSectionData,
};
