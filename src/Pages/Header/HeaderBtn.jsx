import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '../../components/Button/Button';
import Tippy from '@tippyjs/react';
import { IoPersonSharp } from 'react-icons/io5';
import { useEffect } from 'react';
import { Avatar } from '@chakra-ui/react';
import PopUpHeaderHeartBtn from '../../components/PopUp/PopUpHeaderHeartBtn';

const cx = classNames.bind(styles);

export default function HeaderBtn({ items }) {
  const tippyCall = items.tippy;
  const [openTippy, setOpenTippy] = useState(true);
  const [openTippy1, setOpenTippy1] = useState(true);

  const followRequests = [
    {
      idUser: '1',
      title: 'ngvinh.28',
      rName: 'Gia Vinh',
      avatar: '.././src/img/avatar.jpg',
      posts: '5',
      followers: '5',
      following: '10',
      friends: ['2'],
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setOpenTippy(false);
    }, 3000);
  }, [tippyCall]);

  return (
    <>
      {tippyCall ? (
        <Tippy
          visible={openTippy}
          theme="instagram"
          content={
            <div className={cx('tippy-dot')}>
              <IoPersonSharp />
              {items.content}
            </div>
          }
        >
          <div>
            <PopUpHeaderHeartBtn arrow items={followRequests} className={cx('btn')}>
              <Button bottomDot={items.bottomDot} onClick={console.log('123')} className={cx('btnHeaderBar')}>
                {items.icon}
              </Button>
            </PopUpHeaderHeartBtn>
          </div>
        </Tippy>
      ) : (
        <Button bottomDot={items.bottomDot} to={items.to} href={items.href} target={items.target} className={cx('btnHeaderBar')}>
          {items.icon}
        </Button>
      )}
    </>
  );
}
