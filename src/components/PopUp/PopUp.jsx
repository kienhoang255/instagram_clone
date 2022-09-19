import Tippy from '@tippyjs/react/headless';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './PopUp.module.scss';
import Button from '../Button/Button';
import 'tippy.js/dist/tippy.css';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const PopUp = forwardRef(({ children, items, arrow = true, className }, ref) => {
  const classes = cx({ [className]: className });

  const renderBtn = () => {
    return items.map((item, index) => (
      <Button
        key={index}
        item={item}
        hover={item.hover}
        to={item.to}
        href={item.href}
        user={item.user}
        target={item.target}
        leftIcon={item.leftIcon}
        className={classes}
      >
        {item.title}
      </Button>
    ));
  };

  return (
    <Tippy
      ref={ref}
      arrow={true}
      trigger="click"
      placement="bottom-end"
      interactive={true}
      render={(attrs) => (
        <div className={cx('content')} {...attrs}>
          {renderBtn()}
        </div>
      )}
    >
      {children}
    </Tippy>
  );
});
export default PopUp;
