/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import _ from 'underscore';

import {
  selectGlobal
} from 'containers/App/selectors';

const selectHome = () => (state) => state.get('home');

const selectQuestionnaireTable = () => createSelector(
  selectGlobal(),
  (globalState) => console.log("kat: ", globalState.appData) && globalState.getIn(['appData', 'questionnaireList'])
  // (questionnaireList) => questionnaireList != false && console.log("kat: ",questionnaireList) && _.toArray(questionnaireList).map(questionnaire => {
  //     console.log("nadeem: ", questionnaire.oCustomer);
  //     return {oCustomer: questionnaire.oCustomer}
  //   })
);

export {
  selectHome,
  selectQuestionnaireTable,
};
