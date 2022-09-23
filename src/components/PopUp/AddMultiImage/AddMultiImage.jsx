import React from 'react';
import classNames from 'classnames/bind';
import styles from './AddMultiImage.module.scss';
import { AiOutlinePlus } from 'react-icons/ai';

const cx = classNames.bind(styles);

export default function AddMultiImage() {
  return (
    <div className={cx('container')}>
      <button className={cx('img')}>
        <span>
          <AiOutlinePlus />
        </span>
      </button>

      <label htmlFor="add-more-file" className={cx('btn')}>
        <AiOutlinePlus />
      </label>
      <input className={cx('input-file')} type="file" id="add-more-file" name="avatar" accept="image/*" />
    </div>
  );
}
