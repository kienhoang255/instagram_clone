import React from 'react';
import styles from './User.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function AvatarUser() {
  return <img className={cx('avatar-user')} src={require('../../assets/images/avatar.jpg')} alt="anh" />;
}
