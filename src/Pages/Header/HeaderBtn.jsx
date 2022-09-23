import React, { forwardRef, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '../../components/Button/Button';
import Tippy from '@tippyjs/react';
import { IoPersonSharp } from 'react-icons/io5';
import PopUpHeaderHeartBtn from '../../components/PopUp/PopUpHeaderHeartBtn';
import { useMultiStyleConfig, useTab } from '@chakra-ui/react';
import useModal from '../../Hooks/useModal';
import CreateNewPost from '../../components/CreateNewPost/CreateNewPost';

const cx = classNames.bind(styles);

const HeaderBtn = forwardRef(({ items }, ref) => {
  //Notification
  const tippyCall = items.little;
  const [openTippy, setOpenTippy] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOpenTippy(false);
    }, 3000);
  }, [tippyCall]);

  //Modal
  const { isShowing, toggle } = useModal();
  const modal = items.modal;

  //Change icon when select
  const tabProps = useTab({ ...items, ref });
  const isSelected = !!tabProps['aria-selected'];
  const styles = useMultiStyleConfig('Tabs', tabProps);

  const renderBtnIcon = () => {
    if (modal)
      return (
        <div>
          <Button className={cx('btnHeaderBar')} onClick={toggle}>
            {isSelected ? items.icon2nd : items.icon}
          </Button>
          <CreateNewPost isShowing={isShowing} hide={toggle} />
        </div>
      );
    else
      return (
        <Button
          ref={ref}
          __css={styles.tab}
          bottomDot={items.bottomDot}
          to={items.to}
          href={items.href}
          target={items.target}
          className={cx('btnHeaderBar')}
          {...tabProps}
        >
          {isSelected ? items.icon2nd : items.icon}
        </Button>
      );
  };

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
              {renderBtnIcon()}
            </PopUpHeaderHeartBtn>
          </div>
        </Tippy>
      ) : (
        <>{renderBtnIcon()}</>
      )}
    </>
  );
});

export default HeaderBtn;
