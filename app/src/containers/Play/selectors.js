/**
* The global state selectors
*/

import { createSelector } from 'reselect';

const selectPlay = (state) => state.get('play');

const makeSelectorTodos = () => createSelector(
  selectPlay,
  (playState) => playState.get('todos')
);

const makeSelectorVisivilityFilter = () => createSelector(
  selectPlay,
  (playState) => playState.get('visivilityFilter')
);

export {
  makeSelectorTodos,
  makeSelectorVisivilityFilter
};
