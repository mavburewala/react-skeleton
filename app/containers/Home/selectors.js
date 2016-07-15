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
       console.log("nadeem: ", questionnaire.oCustomer);
       return {oCustomer: questionnaire.oCustomer}
     })
);

export {
  selectHome,
  selectQuestionnaireTable,
};
