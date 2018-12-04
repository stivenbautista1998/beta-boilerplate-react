import React from 'react';
import { connect } from 'react-redux';
import {
  addItem,
  setVisibilityFilter,
  toggleTodo
} from './action';
import { VisibilityFilters } from './constants';
import {
  makeSelectorTodos
  // makeSelectorVisivilityFilter
} from './selectors';

const ContentItems = ({ children }) => {
  return (
    <section className="section-item">
      {children}
    </section>
  );
};

const AddItem = ({
  onAddTodoClick
}) => {
  let imput;
  return (
    <div>
      <input className="section-item__input" type="text" ref={node => {
        imput = node;
      }}/>
      <button className="section-item__button" onClick={() => {
        onAddTodoClick(imput.value);
        imput.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

const mapDispatchToAddItemsProps = (dispatch) => ({
  onAddTodoClick: (text) => {
    dispatch(addItem(text));
  }
});

const ContentAddItem = connect(
  null,
  mapDispatchToAddItemsProps
)(AddItem);


const Todo = ({
  onClick, text, completed
}) => {
  return (
    <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </li>
  );
};

const VisibilityFilter = ({ visibleTodos, onTodoClick }) => {
  console.log(visibleTodos);
  return (
    <ul>{
      visibleTodos.map(item =>
        <Todo key={item.id} {...item} onClick={() => onTodoClick(item.id)} />)
    }</ul>
  );
};

const filterTodos = (
  todos, filter
) => {
  switch(filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(
        todo => todo.completed
      );
    case "SHOW_ACTIVE":
      return todos.filter(
        todo => !todo.completed
      );
    default:
      return todos;
  }
}

const mapStateToVisibilityFilterProps = (state) => ({
  visibleTodos: filterTodos(state.toJS().play.todos, state.toJS().play.visibilityFilter)
});

const mapDispatchToVisibilityFilterProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  }
});

const ContentVisibilityFilter = connect(
  mapStateToVisibilityFilterProps,
  mapDispatchToVisibilityFilterProps
)(VisibilityFilter);


const OptionFilter = ({ children, onClickLink, active }) => {
  if(active) {
    return <span className="option-active">{children}</span>
  }

  return (
    <a className="option" href="#" onClick={e => {
      e.preventDefault();
      onClickLink();
    }}>
      {children}
    </a>
  );
};

const mapStateToOptionFilterProps = (state, ownProps) => ({
  active: ownProps.filter === state.toJS().play.visibilityFilter
});

const mapDispatchToOptionFilterProps = (dispatch, ownProps) => ({
  onClickLink: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

const ContentOptions = connect(
  mapStateToOptionFilterProps,
  mapDispatchToOptionFilterProps
)(OptionFilter);

const ContentOptionsAll = () => {
  return (
    <div>
      <ContentOptions filter={VisibilityFilters.SHOW_ALL} >
        All
      </ContentOptions>
      <ContentOptions filter={VisibilityFilters.SHOW_ACTIVE} >
        Active
      </ContentOptions>
      <ContentOptions filter={VisibilityFilters.SHOW_COMPLETED} >
        Complete
      </ContentOptions>
    </div>
  );
};

const Play = () => {
  return (
    <ContentItems>
      <ContentAddItem />
      <ContentVisibilityFilter />
      <ContentOptionsAll />
    </ContentItems>
  );
};

// const OptionFilter = ({ children, onClickLink, active }) => {
//   if(active) {
//     return <span className="option-active">{children}</span>
//   }

//   return (
//     <a className="option" href="#" onClick={e => {
//       e.preventDefault();
//       onClickLink();
//     }}>
//       {children}
//     </a>
//   );
// };

// const filterTodos = (
//   todos, filter
// ) => {
//   switch(filter) {
//     case "SHOW_ALL":
//       return todos;
//     case "SHOW_COMPLETED":
//       return todos.filter(
//         todo => todo.completed
//       );
//     case "SHOW_ACTIVE":
//       return todos.filter(
//         todo => !todo.completed
//       );
//     default:
//       return todos;
//   }
// }

// const Todo = ({
//   onClick, text, completed
// }) => {
//   return (
//     <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
//       {text}
//     </li>
//   );
// };

// const mapStateToVisibiliyFilterProps = (state) => ({
//   visibleTodos: filterTodos(state.todos, state.visibilityFilter)
// });

// const mapDispatchToVisibiliyFilterProps = (dispatch) => ({
//   onTodoClick: (id) => {
//     dispatch(toggleTodo(id))
//   }
// });

// const VisibilityFilter = ({ visibleTodos, onTodoClick }) => {
//   console.log(visibleTodos);
//   return (
//     <ul>{
//       visibleTodos.map(item =>
//         <Todo key={item.id} {...item} onClick={() => onTodoClick(item.id)} />)
//     }</ul>
//   );
// };

// const ContentVisibilityFilter = connect(
//   mapStateToVisibiliyFilterProps,
//   mapDispatchToVisibiliyFilterProps
// )(VisibilityFilter);

// const mapStateToOptionFilterProps = (state, ownProps) => ({
//   active: ownProps.filter === state.visibilityFilter
// });

// const mapDispatchToOptionFilterProps = (dispatch, ownProps) => ({
//   onClickLink: () => {
//     dispatch(setVisivilityFilter(ownProps.filter));
//   }
// });

// const mapDispatchToAddItemsProps = (dispatch) => ({
//   onAddTodoClick: (text) => {
//     dispatch(addItem(text));
//   }
// });

// const ContentAddItem = connect(
//   null,
//   mapDispatchToAddItemsProps
// )(AddItem);

// const ContentOptions = connect(
//   mapStateToOptionFilterProps,
//   mapDispatchToOptionFilterProps
// )(OptionFilter);

// const ContentOptionsAll = () => {
//   return (
//     <div>
//       <ContentOptions filter={VisibilityFilters.SHOW_ALL} >
//         All
//       </ContentOptions>
//       <ContentOptions filter={VisibilityFilters.SHOW_ACTIVE} >
//         Active
//       </ContentOptions>
//       <ContentOptions filter={VisibilityFilters.SHOW_COMPLETED} >
//         Complete
//       </ContentOptions>
//     </div>
//   );
// };

// const Play = () => {
//   return (
//     <ContentItems>
//       <ContentAddItem />
//       <ContentVisibilityFilter />
//       <ContentOptionsAll />
//     </ContentItems>
//   );
// };

export default Play;
