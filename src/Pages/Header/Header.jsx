import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Avatar, TabList, Tabs } from '@chakra-ui/react';
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
import PopUp from '../../components/PopUp/PopUp';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { CgPentagonDown } from 'react-icons/cg';
import { BsGearWide } from 'react-icons/bs';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import HeaderBtn from './HeaderBtn';

const cx = classNames.bind(styles);

export default function Header() {
  const iconHeaderBar = [
    {
      id: 1,
      icon: <AiOutlineHome />,
      icon2nd: <AiFillHome />,
      to: '/',
    },
    {
      id: 2,
      icon: <RiMessengerLine />,
      icon2nd: <RiMessengerFill />,
      to: '/message',
    },
    {
      id: 3,
      icon: <AiOutlinePlusSquare />,
      icon2nd: <AiFillPlusSquare />,
      modal: true,
      trigger: `toggle`,
    },
    {
      id: 4,
      icon: <AiOutlineCompass />,
      icon2nd: <AiFillCompass />,
    },
    {
      id: 5,
      icon: <AiOutlineHeart />,
      icon2nd: <AiFillHeart />,
      bottomDot: true,
      little: 'true',
      content: '5',
    },
  ];
  const itemProfile = [
    {
      leftIcon: <IoPersonCircleOutline />,
      title: 'Profile',
      hover: true,
      to: '/profile',
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
        <div className={cx('logo')}>
          <Logo />
        </div>
        <div className={cx('search')}>
          <Input />
        </div>
        <div className={cx('container')}>
          <Tabs variant="unstyle">
            <TabList>
              {iconHeaderBar.map((items, index) => (
                <HeaderBtn items={items} key={index} />
              ))}
            </TabList>
          </Tabs>
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
