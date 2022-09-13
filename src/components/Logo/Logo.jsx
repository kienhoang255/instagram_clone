import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import image from '../../assets/images/index';
import styles from './Logo.module.scss';
import ButtonArrowDown from './ButtonArrowDown';
import PopUp from '../PopUp/PopUp';
import { BsPersonCheck, BsStar } from 'react-icons/bs';
import { useEffect } from 'react';
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
  //https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOnClickLogo(false);
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
    <Link to="/" className={cx('logo')}>
      <img className={cx('logo-img')} src={image.logo} alt="instagram-icon" />
      <div onClick={triggerTippy}>
        <PopUp items={items} events={onClickLogo} className={cx('btn')}>
          <ButtonArrowDown ref={wrapperRef} />
        </PopUp>
      </div>
    </Link>
  );
}
