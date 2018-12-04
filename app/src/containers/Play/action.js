/**
 * Play actions
 * this is the play actions of the app
 */

import {
  ADD_ITEM,
  DELETE_ITEM,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from './constants';

/**
 * action for add item on the store
 * @param {text} text is the content of the new item
 */
let nextId = 0;
export const addItem = (text) => ({
  type: ADD_ITEM,
  id: nextId++,
  text
});

/**
 * action for the delete item of the store
 * @param {id} id is the id that identify the item
 */
export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id
});

/**
 * action for the toggle todo of the store
 * @param {id} id is the id that identify the item
 */
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});


/**
 * action creator for set visibility filter of the store
 * @param {filter} filter is the filter field for change the todos
 * of the store
 */
export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
