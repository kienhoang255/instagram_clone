import Tippy from '@tippyjs/react';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './PopUp.module.scss';
import 'tippy.js/dist/tippy.css';
import { forwardRef } from 'react';
import TwoAvatarUser from '../User/TwoAvatarUser';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import AvatarUser from '../User/AvatarUser';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const PopUpHeaderHeartBtn = forwardRef(({ children }, ref) => {
  return (
    <Tippy
      ref={ref}
      trigger="click"
      interactive={true}
      theme="primary"
      maxWidth="500px"
      className={cx('header-heart-btn')}
      content={
        <div className={cx('header-heart-content')}>
          <div className={cx('header-heart-content1')}>
            <TwoAvatarUser />
            <div className={cx('header-heart-request')}>
              <div>Follow Requests</div>
              <div>Name + 2 others</div>
            </div>
            <div className={cx('header-heart-icon')}>
              <GoPrimitiveDot />
              <IoIosArrowForward />
            </div>
          </div>
          <div className={cx('header-heart-content2')}>
            <div>Today</div>
            <div className={cx('header-today')}>
              <AvatarUser />
              <div className={cx('follower')}>
                <p>Name </p> started following you
              </div>
              <Button primary>Follow</Button>
            </div>
          </div>
        </div>
      }
    >
      {children}
    </Tippy>
  );
});
export default PopUpHeaderHeartBtn;
