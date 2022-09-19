import React from 'react';
import classNames from 'classnames/bind';
import styles from './ManagetBtnNewPost.module.scss';
import { btnManagerNewPost } from '../../../utils/HeaderManager';
import ManagerBtnPopUp from '../../PopUp/CreateNewPost/ManagerBtnPopUp';

const cx = classNames.bind(styles);

export default function ManagerBtnNewPost({ className }) {
  const classes = cx('container', ([className] = className));

  const renderRightBtn = btnManagerNewPost
    .filter((pos) => pos.pos === 'right')
    .map((items, key) => (
      <span key={key}>
        <ManagerBtnPopUp placement="top-start" btn={items.btn} components={items.component}>
          <button className={cx('right-btn')}>{items.icon}</button>
        </ManagerBtnPopUp>
      </span>
    ));
  const renderMidBtn = btnManagerNewPost
    .filter((pos) => pos.pos === 'mid')
    .map((items, key) => (
      <span key={key}>
        <ManagerBtnPopUp btn={items.btn} components={items.component}>
          <button className={cx('mid-btn')}>{items.icon}</button>
        </ManagerBtnPopUp>
      </span>
    ));
  const renderLeftBtn = btnManagerNewPost
    .filter((pos) => pos.pos === 'left')
    .map((items, key) => (
      <span key={key}>
        <ManagerBtnPopUp placement="top-end" btn={items.btn} components={items.component}>
          <button className={cx('left-btn')}>{items.icon}</button>
        </ManagerBtnPopUp>
      </span>
    ));

  return (
    <div className={classes}>
      <div className={cx('right-content')}>{renderRightBtn}</div>
      <div className={cx('mid-content')}>{renderMidBtn}</div>
      <div className={cx('left-content')}>{renderLeftBtn}</div>
    </div>
  );
}
