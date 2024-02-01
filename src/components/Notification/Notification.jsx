import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.css';

const Notification = ({ message }) => (
  <p className={styles.NotificationP}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
