import React from 'react';
// import PropTypes from 'prop-types';
import SocialNetworks from './SocialNetworks';
import './style.scss';

const myFooter = {
  author: 'Stiven Bautista',
  license: 'private'
};

function Footer() {
  const isPrivate = myFooter.license === 'private';
  return (
    <footer className="footer">
      <div className="wrapper">
        <p className="footer__content">
          {`Autor: ${myFooter.author}`}
        </p>
        <p className="footer__content">{isPrivate ? '\u00A9 Copyright 2018' : 'libre'}</p>
        <SocialNetworks />
        <p className="footer__content">
          ready to develop
          <span role="img" aria-label="icon of heart"> ❤️</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
