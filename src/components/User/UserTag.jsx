import React from 'react';
import classNames from 'classnames/bind';
import styles from './User.module.scss';
import AvatarUser from './AvatarUser';
import { IoClose } from 'react-icons/io5';

const cx = classNames.bind(styles);

export default function UserTag({ deleteIcon = false, subName = false }) {
  return (
    <div className={cx('userTag_content')}>
      <div className={cx('userTag_avatar')}>
        <AvatarUser />
      </div>
      <div className={cx('userTag_name')}>
        <p>KienHoang</p>
        <p>{subName && 'Kien'}</p>
      </div>
      {deleteIcon && (
        <span className={cx('delete_tag')}>
          <IoClose />
        </span>
      )}
    </div>
  );
}
