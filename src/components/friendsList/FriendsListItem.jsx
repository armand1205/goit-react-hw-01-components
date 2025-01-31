// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import styles from './FriendsList.module.css';
const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.active : styles.inactive}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
