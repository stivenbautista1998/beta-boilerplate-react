import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function ListItems({ items }) {
  ListItems.prototype = {
    items: PropTypes.object
  };
  if(!items) {
    return null;
  }
  const result = items.list.map((item) => {
    const is_selected = item.name === "home";
    return (
      <li key={item.id} className="list__item">
        <a className={is_selected ? 'list__link list__link--selected' : 'list__link'} href={item.link}>{item.name}</a>
      </li>
    );
  });
  return (
    <ul className="list">
      {result}
    </ul>
  );
}

export default ListItems;
