import React from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
import './style.scss';

export default function Feactures() {
  return (
    <section className="section section-feactures">
      <Helmet>
        <title>Boilerplate Feactures</title>
        <meta
          name="description"
          content="This section shows the different characteristics of the boilerplate react"
        />
      </Helmet>

      <div className="wrapper">
        <h1 className="section-feactures__title">Boilerplate Feactures</h1>
        <ul>
          <li>Ultimate Javascript</li>
          <li>Best css with SASS</li>
          <li>Generate optimize code with webpack</li>
          <li>Usign the best specifications</li>
          <li>Generate react apps</li>
        </ul>
      </div>
    </section>
  );
}
