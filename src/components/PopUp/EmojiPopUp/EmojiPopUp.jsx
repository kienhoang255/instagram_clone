import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './EmojiPopUp.module.scss';
import Picker from 'emoji-picker-react';

const cx = classNames.bind(styles);

export default function EmojiPopUp({ children, setCharacters }) {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setCharacters((prev) => prev + emojiObject.emoji);
    console.log(chosenEmoji);
  };
  return (
    <Tippy
      trigger="click"
      interactive={true}
      theme="primary"
      placement="bottom"
      className={cx('content')}
      content={<Picker onEmojiClick={onEmojiClick} />}
    >
      {children}
    </Tippy>
  );
}
