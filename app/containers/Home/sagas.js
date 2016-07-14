/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_QUESTIONNAIRE_LIST } from 'containers/App/constants';
import { questionnaireListLoaded, questionnaireListLoadingError } from 'containers/App/actions';

import { GetQuestionnaireListFromServer } from 'utils/mockServer';

/**
 * Github repos request/response handler
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
 * Watches for LOAD_REPOS action and calls handler
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

// Bootstrap sagas
export default [
  questionnaireData,
];
