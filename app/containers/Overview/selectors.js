/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('overview');

const selectUsername = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('username')
);

export {
  selectHome,
  selectUsername,
};
