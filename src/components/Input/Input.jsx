import React, { useEffect } from 'react';
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
  const [save, setSave] = useState('Search');
  const [openTippy, setOpenTippy] = useState(false);

  const handleOnClick = () => {
    setOnInput(true);
  };

  const onClearText = () => {
    setValueInput('');
    setSave('Search');
    setOpenTippy(false);
    setOnInput(false);
  };

  const handleOnFocus = () => {
    setOnInput(true);
    setOpenTippy(true);
  };

  const handleOnBlur = () => {};

  useEffect(() => {
    if (valueInput !== '') setSave(valueInput);
    if (save === 'Search') setValueInput('');
  }, [onInput, valueInput, save]);

  return (
    <Tippy
      arrow={true}
      interactive={true}
      maxWidth="375px"
      visible={openTippy}
      placement="bottom"
      theme="primary"
      onClickOutside={() => {
        setOnInput(false);
        setOpenTippy(false);
      }}
      content={
        <div className={cx('tippy-box')}>
          <div className={cx('tippy-header')}>
            <div>Recent</div>
            <Button className={cx('clear-btn')} bold>
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
      <div className={cx('content')}>
        {onInput ? (
          <>
            <input
              autoFocus
              className={cx('input')}
              type="text"
              placeholder="Search"
              value={valueInput}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              onChange={(e) => {
                const value = e.target.value;
                return setValueInput(value);
              }}
            />
            <span className={cx('icon-input')} onClick={onClearText}>
              <MdCancel />
            </span>
          </>
        ) : (
          <>
            <span onClick={handleOnClick} className={cx('icon-search')}>
              <BiSearch />
            </span>
            <p onClick={handleOnClick} className={cx('title')}>
              {save}
            </p>
          </>
        )}
      </div>
    </Tippy>
  );
}
