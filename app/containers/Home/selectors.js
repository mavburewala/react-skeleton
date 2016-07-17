/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import _ from 'underscore';

import {
  selectQuestionnaireList
} from 'containers/App/selectors';

const selectHome = () => (state) => state.get('home');

const selectQuestionnaireTable = () => createSelector(
  selectQuestionnaireList(),
   (questionnaireList) => questionnaireList.map(questionnaire => {
     var totalSections = [];
      questionnaire.oQuestionList.map(question => {
        if (!_.contains(totalSections, question.oSection)) {
          totalSections.push(question.oSection)
        }
      });

      var mainSections = [];
      totalSections.map(section => {
        if (!_.contains(mainSections, section.sMainSection)) {
          mainSections.push(section.sMainSection)
        }
      });

      var subSections = [];
      totalSections.map(section => {
        if (!_.contains(subSections, section.sSubSection)) {
          subSections.push(section.sSubSection)
        }
      });
      return {
         Id: questionnaire.sId,
         customerName: questionnaire.oCustomer,
         questionsCount: questionnaire.oQuestionList.length,
         sectionsCount: mainSections.length,
         subSectionsCount: subSections.length,
         remarksCount: 0,
         toDoCount: 0,
       };
     })
);

export {
  selectHome,
  selectQuestionnaireTable,
};
