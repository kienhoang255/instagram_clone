import React from 'react';
import Button from '../../Button/Button';
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

      <Button className={cx('btn')}>
        <AiOutlinePlus />
      </Button>
    </div>
  );
}
