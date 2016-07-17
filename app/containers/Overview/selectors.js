/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import _ from 'underscore';

import {
  selectQuestionnaireList
} from 'containers/App/selectors';

const selectOverview = () => (state) => state.get('overview');

const selectCurrentQuestionnaireId = () => createSelector(
  selectOverview(),
  (overviewState) => overviewState.get('currentQuestionnaireId')
);


const selectCurrentQuestionnaire = () => createSelector(
  [selectQuestionnaireList(), selectCurrentQuestionnaireId()],
  (questionnaireList, questionnaireId) => questionnaireList.find((questionnaire) => questionnaire.sId === questionnaireId)
);


const selectCurrentQuestionnaireTotalQuestions = () => createSelector(
  selectCurrentQuestionnaire(),
  (questionnaire) => questionnaire? questionnaire.oQuestionList.length: 0
);

const selectCurrentQuestionnaireCompleteQuestions = () => createSelector(
  selectCurrentQuestionnaire(),
  (questionnaire) => questionnaire?_.filter(questionnaire.oQuestionList, (question)=> question.sAnswer !== "" ).length: 0
);

const selectCurrentQuestionnaireApprovedQuestions = () => createSelector(
  selectCurrentQuestionnaire(),
  (questionnaire) => questionnaire?_.filter(questionnaire.oQuestionList, (question)=> question.bApproved === true ).length: 0
);

const selectCurrentQuestionnaireRemarks = () => createSelector(
  selectCurrentQuestionnaire(),
  (questionnaire) => 0
);

const selectCurrentQuestionnaireTotalSections = () => createSelector(
  selectCurrentQuestionnaire(),
  (questionnaire) =>  questionnaire? _.uniq(questionnaire.oQuestionList.map(question => question.oSection)):[]
);

const selectCurrentQuestionnaireMainSections = () => createSelector(
  selectCurrentQuestionnaireTotalSections(),
  (totalSections) => _.uniq(totalSections.map(section => section.sMainSection))
);

const selectCurrentQuestionnaireSubSections = () => createSelector(
  selectCurrentQuestionnaireTotalSections(),
  (totalSections) => _.uniq(totalSections.map(section => section.sSubSection))
);

const selectCurrentQuestionnaireData = () => createSelector(
  [ selectCurrentQuestionnaire(),
    selectCurrentQuestionnaireTotalQuestions(),
    selectCurrentQuestionnaireCompleteQuestions(),
    selectCurrentQuestionnaireRemarks(),
    selectCurrentQuestionnaireApprovedQuestions(),
    selectCurrentQuestionnaireMainSections(),
    selectCurrentQuestionnaireSubSections(),
    selectSectionsData(),
  ],
  (questionnaire, totalQuestions,
    completeQuestions, remarks,
    approvedQuestions, mainSections,
    subSections, sectionsData) => ({id: questionnaire?questionnaire.sId:'',
                       totalQuestionsCount: totalQuestions,
                       completeQuestionsCount: completeQuestions,
                       remarksCount: remarks,
                       approvedQuestionsCount: approvedQuestions,
                       mainSectionsCount: mainSections.length,
                       subSectionsCount: subSections.length,
                       sectionsData: sectionsData,


                     })
);

const selectSectionsData = () => createSelector(
  [ selectCurrentQuestionnaire(),
    selectCurrentQuestionnaireMainSections(),
    selectCurrentQuestionnaireTotalSections(),
  ],
  (questionnaire, mainSections, totalSections) => mainSections.map(section => ({
    name: section,
    totalQuestionsCount: questionnaire? _.filter(questionnaire.oQuestionList, (question)=> question.oSection.sMainSection === section).length: 0,
    completeQuestionsCount: questionnaire? _.filter(questionnaire.oQuestionList, (question)=> question.oSection.sMainSection === section && question.sAnswer !== "" ).length: 0,
    subSection: _.sortBy(_.filter(totalSections, (sectionObj) => sectionObj.sMainSection === section ), 'iSequence')[0].sSubSection,
    remarksCount: 0,
  })
));



export {
  selectHome,
  selectCurrentQuestionnaireData,
  selectCurrentQuestionnaireTotalSections
};
