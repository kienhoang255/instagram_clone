import React, { forwardRef } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Avatar } from '@chakra-ui/react';
import {
  AiOutlineHeart,
  AiOutlineCompass,
  AiOutlinePlusSquare,
  AiOutlineHome,
  AiFillHome,
  AiFillPlusSquare,
  AiFillCompass,
  AiFillHeart,
} from 'react-icons/ai';
import { RiMessengerFill, RiMessengerLine } from 'react-icons/ri';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import PopUp from '../../components/PopUp/PopUp';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { CgPentagonDown } from 'react-icons/cg';
import { BsGearWide } from 'react-icons/bs';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import { useState } from 'react';
import HeaderBtn from './HeaderBtn';

const cx = classNames.bind(styles);

const LogoRef = forwardRef((props, ref) => {
  return <Logo ref={ref}></Logo>;
});

export default function Header() {
  const [iconActive, setIconAvtive] = useState(false);

  const iconHeaderBar = [
    {
      icon: <AiOutlineHome />,
      activeIcon: <AiFillHome />,
    },
    {
      icon: <RiMessengerLine />,
      activeIcon: <RiMessengerFill />,
      to: '/message',
    },
    {
      icon: <AiOutlinePlusSquare />,
      activeIcon: <AiFillPlusSquare />,
      href: 'https://fullstack.edu.vn/',
      target: '_blank',
    },
    {
      icon: <AiOutlineCompass />,
      activeIcon: <AiFillCompass />,
    },
    {
      icon: <AiOutlineHeart />,
      activeIcon: <AiFillHeart />,
      bottomDot: true,
      tippy: true,
      content: '5',
    },
  ];

  const itemProfile = [
    {
      leftIcon: <IoPersonCircleOutline />,
      title: 'Profile',
      hover: true,
    },
    {
      leftIcon: <CgPentagonDown />,
      title: 'Saved',
      hover: true,
    },
    {
      leftIcon: <BsGearWide />,
      title: 'Settings',
      hover: true,
    },
    {
      leftIcon: <HiOutlineSwitchHorizontal />,
      title: 'Switch Account',
      hover: true,
    },
    {
      title: 'Log out',
      hover: true,
    },
  ];
  return (
    <div className={cx('header')}>
      <div className={cx('items')}>
        {/* <LogoRef className={cx('logo')} /> */}
        <div className={cx('logo')}>
          <Logo />
        </div>
        <div className={cx('search')}>
          <Input />
        </div>
        <div className={cx('container')}>
          {iconHeaderBar.map((items, index) => (
            <HeaderBtn items={items} key={index} />
          ))}
          <div className={cx('avatar')}>
            <PopUp arrow items={itemProfile} className={cx('btn')}>
              <Avatar size="xs" />
            </PopUp>
          </div>
        </div>
      </div>
    </div>
  );
}
