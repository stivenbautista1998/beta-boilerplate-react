import React from 'react';
import styles from './fancy-button.scss';

const FancyButton = (props) => {
  const { label } = props;
  if (!label) {
    return null;
  }
  return <button type="button" className={styles.button}>{label}</button>;
};

export default FancyButton;
