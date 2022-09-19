import React, { useState } from 'react';
import classNames from 'classnames/bind';
import image from '../../assets/images/index';
import styles from './Logo.module.scss';
import ButtonArrowDown from './ButtonArrowDown';
import PopUp from '../PopUp/PopUp';
import { BsPersonCheck, BsStar } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function Logo() {
  const [onClickLogo, setOnClickLogo] = useState(false);

  const triggerTippy = () => {
    setOnClickLogo(true);
  };

  const items = [
    {
      leftIcon: <BsPersonCheck />,
      title: 'Following',
      hover: true,
    },
    {
      leftIcon: <BsStar />,
      title: 'Favorites',
      hover: true,
    },
  ];
  return (
    <div className={cx('logo')}>
      <Link to="/">
        <img className={cx('logo-img')} src={image.logo} alt="instagram-icon" />
      </Link>
      <div onClick={triggerTippy}>
        <PopUp items={items} events={onClickLogo} className={cx('btn')}>
          <ButtonArrowDown />
        </PopUp>
      </div>
    </div>
  );
}
