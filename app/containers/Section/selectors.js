/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

import _ from 'underscore';

import {
  selectQuestionnaireList
} from 'containers/App/selectors';

import {
  selectCurrentQuestionnaireTotalSections
} from 'containers/Overview/selectors';


const selectSection = () => (state) => state.get('section');

const selectCurrentQuestionnaireId = () => createSelector(
  selectSection(),
  (selectState) => selectState.get('currentQuestionnaireId')
);

const selectCurrentQuestionnaireIndex = () => createSelector(
  [selectQuestionnaireList(), selectCurrentQuestionnaireId()],
  (questionnaireList, questionnaireId) => _.findIndex(questionnaireList, (questionnaire) => questionnaire.sId === questionnaireId )
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

const selectSubSections = () => createSelector(
  [selectCurrentQuestionnaireTotalSections(),selectMainSection()],
  (sections, mainSection) => _.filter(sections, (section)=> section.sMainSection ===  mainSection)
);

const selectSubSectionIndex = () => createSelector(
  [selectSubSections(),selectSubSection()],
  (sections, subSection) => _.findIndex(_.sortBy(sections, 'iSequence'), (section) => section.sSubSection === subSection)
);


const selectSectionData = () => createSelector(
  [selectCurrentQuestionnaireId(), selectMainSection(),
    selectSubSection(), selectQuestions(), selectSubSections(), selectSubSectionIndex(),
    selectCurrentQuestionnaireIndex()],
  (questionnaireId, mainSection, subSection, questions, sections, subSectionIndex, questionnaireIndex) => ({
    questionnaireId: questionnaireId,
    questionnaireIndex: questionnaireIndex,
    mainSectionName: mainSection,
    subSectionName: subSection,
    questions: questions,
    questionsCount: questions.length,
    completedQuestionsCount: _.filter(questions, (question)=> question.sAnswer !== "" ).length,
    approvedQuestionsCount: _.filter(questions, (question)=> question.bApproved === true ).length,
    remarks: 0,
    subSectionsCount: sections.length,
    nextSubSection: subSectionIndex < sections.length? (sections[(subSectionIndex+1)] != null && sections[(subSectionIndex+1)] != undefined? sections[(subSectionIndex+1)].sSubSection: null): null

  })
);



export {
  selectSection,
  selectSectionData,
};
