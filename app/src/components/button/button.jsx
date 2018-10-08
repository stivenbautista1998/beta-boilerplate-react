import React from 'react';
import styles from './button.scss';

const Button = (props) => {
  const { label } = props;
  if (!label) {
    return null;
  }
  return <button type="button" className={styles.button}>{label}</button>;
};

export default Button;
