import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.scss';

const Button = (props) => {
  Button.propTypes = {
    label: PropTypes.string
  };
  const { label } = props;
  if (!label) {
    return null;
  }
  return <button type="button" className={styles.button}>{label}</button>;
};

export default Button;
