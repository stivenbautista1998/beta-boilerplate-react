// import { combineReducers } from 'redux';
import { List, fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

const todo = (state, action) => {
  switch(action.type) {
    case "ADD_ITEM":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "DELETE_ITEM":
      return state.get('id') !== action.id;
    case "TOOGLE_TODO":
      if(state.get('id') !== action.id) {
        return state;
      }

      return state.update('completed', completed => !completed);
    default:
      return state;
  }
};

const initTodos = List([]);

const todos = (state = initTodos, action) => {
  switch(action.type) {
    case "ADD_ITEM":
      return state.push(fromJS(todo(undefined, action)));
    case "DELETE_ITEM":
      return state.filter((t) => todo(t, action));
    case "TOGGLE_TODO":
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case "SET_VISIVILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const todoPlay = combineReducers({
  todos,
  visibilityFilter
});

export default todoPlay;

// const todoApp = (state = {}, action) => ({
//   todo: todos(
//     state.todos,
//     action
//   ),
//   visivilityFilter: visivilityFilter(
//     state.visivilityFilter,
//     action
//   )
// });

// const todoPlay = combineReducers({
//   todos,
//   visivilityFilter
// });
