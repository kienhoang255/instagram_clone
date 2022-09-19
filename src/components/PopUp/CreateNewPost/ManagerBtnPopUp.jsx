import Tippy from '@tippyjs/react/headless';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './ManagerBtnPopUp.module.scss';
import Button from '../../Button/Button';

const cx = classNames.bind(styles);

export default function ManagerBtnPopUp({ children, className, btn, components, offSet, placement }) {
  let Types = Button;
  if (components) Types = 'div';

  let controls = btn;
  if (components) controls = components;

  const classes = cx('container', { [className]: className });

  return (
    <Tippy
      offset={offSet}
      placement={placement}
      trigger="click"
      interactive={true}
      render={(attrs) => (
        <div className={classes} tabIndex="-1" {...attrs}>
          {controls?.map((items, key) => (
            <Types key={key} rightIcon={items.icon} className={cx('icon-content')}>
              <div className={cx('content')}>{items.content}</div>
            </Types>
          ))}
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}
