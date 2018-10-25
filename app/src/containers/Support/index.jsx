import React from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
import './style.scss';

export default function Support() {
  return (
    <section className="section section-support">
      <Helmet>
        <title>Boilerplate Support</title>
        <meta
          name="description"
          content="In this section the support of different browsers is shown."
        />
      </Helmet>

      <div className="wrapper">
        <h1 className="section-support__title">Navigator supports</h1>
        <div className="section-support__content">
          <p>
            the content Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Facere obcaecati iusto, voluptatum explicabo dolorum quod suscipit laudantium
            distinctio sequi error ratione dolore labore saepe, voluptas fugit totam numquam,
            maiores eaque?
          </p>
        </div>
      </div>
    </section>
  );
}
