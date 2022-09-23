import React, { useState } from 'react';
import styles from './SharePost.module.scss';
import classNames from 'classnames/bind';
import imgSharedGif from '../../../assets/images/sharedPost.gif';
import imgSharingGif from '../../../assets/images/sharing.gif';

const cx = classNames.bind(styles);

export default function SharePost({ hide }) {
  const [onShare, setOnShare] = useState(true);
  const shared = () => {
    return (
      <>
        <img className={cx('img-shared')} src={`${imgSharedGif}`} alt="" />
        <p className={cx('notification')}>Your post has been shared</p>
      </>
    );
  };
  const sharing = () => {
    return <img className={cx('img-shared')} src={`${imgSharingGif}`} alt="" />;
  };
  setTimeout(() => {
    setOnShare(false);
  }, 2000);
  return (
    <>
      <button type="button" className={cx('modal-close-button')} data-dismiss="modal" aria-label="Close" onClick={hide}>
        <span aria-hidden="true">&times;</span>
      </button>
      <div className={cx('content')}>
        <div className={cx('header-modal')}>{onShare ? 'Sharing' : 'Post shared'}</div>
        <div className={cx('content-modal')}>{onShare ? sharing() : shared()}</div>
      </div>
    </>
  );
}
