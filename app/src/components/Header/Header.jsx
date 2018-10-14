import React from 'react';
import './style.scss';
import ListItems from './ListItems';
import img from '../../../public/media/img/logo.svg';

const myList = {
  list: [
    {id: 1, name: 'home', link: '#'},
    {id: 2, name: 'about', link: '#'},
    {id: 3, name: 'products', link: '#'},
    {id: 4, name: 'contats', link: '#'}
  ]
};

function Icon({ logo }) {
  if(!logo) {
    return null;
  }
  return (
    <img src={logo} className="icon-logo" alt="my logo from page"/>
  );
}

function Header(props) {
  return (
    <header className="header">
      <nav className="section-nav">
        <a href="#">
          <Icon logo={img} />
        </a>
        <ListItems items={myList} />
      </nav>
    </header>
  );
}

export default Header;
