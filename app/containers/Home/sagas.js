/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GENERATE_TEST_QUESTIONNAIRE } from 'containers/App/constants';
import { testQuestionnaireGenerated, testQuestionnaireGenerationError } from 'containers/App/actions';

import { GetTestData } from 'utils/createTestData';


/**
 * mock server get data handler
 */
export function* generateTestQuestionnaire() {
  // Call our request helper (see 'utils/request')
  const data = yield call(GetTestData);

  console.log(data)

  if (!data.err) {
    yield put(testQuestionnaireGenerated(data.questionnaire));
  } else {
    yield put(testQuestionnaireGenerationError(data.err));
  }
}

/**
 * Watches for GENERATE_TEST_QUESTIONNAIRE action and calls handler
 */
export function* generateTestQuestionnaireWatcher() {
  while (yield take(GENERATE_TEST_QUESTIONNAIRE)) {
    yield call(generateTestQuestionnaire);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* newQuestionnaireTestData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(generateTestQuestionnaireWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}



// Bootstrap sagas
export default [
  newQuestionnaireTestData
];
