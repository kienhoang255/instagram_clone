import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Accessibility.module.scss';
import { ImgPreview } from '../SettingNewPost/NewPost';
const cx = classNames.bind(styles);

export default function Accessibility() {
  const imgPreview = useContext(ImgPreview);
  return (
    <div className={cx('container')}>
      <span className={cx('header')}>
        Alt text describes your photos for people with visual impairments. Alt text will be automatically created for your photos or you can choose to
        write your own.
      </span>
      <div className={cx('description')}>
        <div className={cx('content')}>
          <img classNames={cx('img')} src={`${imgPreview}`} alt="" />
        </div>
        <input className={cx('input')} type="text" placeholder="input" />
      </div>
    </div>
  );
}
