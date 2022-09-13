import React from 'react';
import styles from './User.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function TwoAvatarUser() {
  return (
    <div className={cx('avatar-holder')}>
      <span>
        <img className={cx('avatar-user1')} src={require('../../assets/images/avatar.jpg')} alt="anh" />
      </span>
      <div>
        <img className={cx('avatar-user2')} src={require('../../assets/images/avatar.jpg')} alt="anh" />
      </div>
    </div>
  );
}
