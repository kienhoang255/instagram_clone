import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import { MdCancel } from 'react-icons/md';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '../Button/Button';
import UserTag from '../User/UserTag';

const cx = classNames.bind(styles);

export default function Input() {
  const [onInput, setOnInput] = useState(false);
  const [valueInput, setValueInput] = useState('');

  const handleOnClick = () => {
    setOnInput(true);
    if (valueInput !== '') {
      setValueInput('');
    }
  };

  const clearValue = () => {
    setOnInput(false);
    console.log(onInput);
  };

  const recentItems = [
    {
      idUser: '1',
      nameUser: 'ngvinh.28',
      rName: 'Gia Vinh',
      avatar: '.././src/img/avatar.jpg',
      user: true,
    },
    {
      idUser: '2',
      nameUser: 'vdau31.11',
      rName: 'Say Dậu',
      avatar: '.././src/img/avatar.jpg',
      user: true,
    },
    {
      idUser: '3',
      nameUser: 'kienhoang255',
      rName: 'Kien Hoang',
      avatar: '.././src/img/avatar.jpg',
      user: true,
    },
  ];

  //https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOnInput(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <Tippy
      arrow={true}
      interactive={true}
      visible={onInput}
      placement="bottom"
      theme="primary"
      content={
        <div className={cx('tippy-box')}>
          <div className={cx('tippy-header')}>
            <div>Recent</div>
            <Button primary bold>
              Clear All
            </Button>
          </div>
          <div className={cx('tippy-content')}>
            <UserTag deleteIcon={true} />
            <UserTag deleteIcon={true} />
            <UserTag deleteIcon={true} />
            <UserTag deleteIcon={true} />
            <UserTag deleteIcon={true} />
            <UserTag deleteIcon={true} />
            <UserTag deleteIcon={true} />
            <UserTag deleteIcon={true} />
            <UserTag deleteIcon={true} />
          </div>
        </div>
      }
    >
      <div className={cx('content')} ref={wrapperRef}>
        {onInput ? (
          <>
            <input
              onClick={handleOnClick}
              autoFocus
              className={cx('input')}
              type="text"
              placeholder="Search"
              value={valueInput}
              onChange={(e) => {
                const value = e.target.value;
                return setValueInput(value);
              }}
            />
            <span onClick={clearValue} className={cx('icon-input')}>
              <MdCancel onClick={clearValue} />
            </span>
          </>
        ) : (
          <>
            <span onClick={handleOnClick} className={cx('icon-search')}>
              <BiSearch />
            </span>
            <p onClick={handleOnClick} className={cx('title')}>
              Search
            </p>
          </>
        )}
      </div>
    </Tippy>
  );
}
