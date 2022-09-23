import React from 'react';
import classNames from 'classnames/bind';
import styles from './AdvancedSetting.module.scss';
import { Switch } from '@chakra-ui/react';

const cx = classNames.bind(styles);

export default function AdvancedSetting() {
  const content = [
    {
      title: 'Hide like and view counts on this post',
      para: "Only you will see the total number of likes and views on this post. You can change this later by going to the ··· menu at the top of the post. To hide like counts on other people's posts, go to your account settings.",
      href: true,
      link: 123,
    },
    {
      title: 'Turn off commenting',
      para: 'You can change this later by going to the ··· menu at the top of your post.',
    },
  ];

  return (
    <>
      {content.map((items, key) => {
        return (
          <div key={key} className={cx('container')}>
            <div className={cx('header')}>
              <span className={cx('title')}>{items.title}</span>
              <Switch size="lg" />
            </div>
            <div className={cx('footer')}>
              <p className={cx('text')}>
                {items.para}
                <a href=".">Learn more</a>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
