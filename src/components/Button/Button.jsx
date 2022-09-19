import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = forwardRef(
  (
    {
      children,
      leftIcon,
      rightIcon,
      to,
      href,
      types,
      className,
      hover = false,
      user = false,
      primary = false,
      bold = false,
      bottomDot = false,
      onClick,
      ...passProp
    },
    ref,
  ) => {
    let Types = 'button';
    const props = {
      onClick,
      ...passProp,
    };

    if (to) {
      props.to = to;
      Types = Link;
    } else if (href) {
      props.href = href;
      Types = 'a';
    }

    let Title = cx('title');

    if (bottomDot) {
      Title = cx('bottomDot');
    }

    const classes = cx('wrapper', {
      [className]: className,
      hover,
      primary,
      bold,
    });

    return (
      <Types className={classes} {...props} ref={ref}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <div className={Title}>{children}</div>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Types>
    );
  },
);

export default Button;
