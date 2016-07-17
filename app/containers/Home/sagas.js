import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_QUESTIONNAIRE_LIST } from 'containers/App/constants';
import { questionnaireListLoaded, questionnaireListLoadingError } from 'containers/App/actions';

import { GetQuestionnaireListFromServer } from 'utils/mockServer';


import { GENERATE_TEST_QUESTIONNAIRE } from 'containers/App/constants';
import { testQuestionnaireGenerated, testQuestionnaireGenerationError } from 'containers/App/actions';

import { GetTestData } from 'utils/createTestData';


/**
 * mock server get data handler
 */
export function* getQuestionnaireList() {

  // Call our request helper (see 'utils/request')
  const list = yield call(GetQuestionnaireListFromServer);


  if (!list.err) {
    yield put(questionnaireListLoaded(list.questionnaireList));
  } else {
    yield put(questionnaireListLoadingError(list.err));
  }
}

/**
 * Watches for LOAD_QUESTIONNAIRE_LIST action and calls handler
 */
export function* getQuestionnaireListWatcher() {
  while (yield take(LOAD_QUESTIONNAIRE_LIST)) {
    yield call(getQuestionnaireList);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* questionnaireData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getQuestionnaireListWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


/**
 * mock server get data handler
 */
export function* generateTestQuestionnaire() {
  // Call our request helper (see 'utils/request')
  const data = yield call(GetTestData);


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
  questionnaireData,
  newQuestionnaireTestData
];
