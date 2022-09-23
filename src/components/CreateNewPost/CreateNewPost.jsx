import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import styles from './CreateNewPost.module.scss';
import NewPost from './SettingNewPost/NewPost';

const cx = classNames.bind(styles);

const CreateNewPost = ({ isShowing, hide }) => {
  return isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className={cx('container')}>
              <NewPost hide={hide} />
            </div>
          </div>
        </>,
        document.body,
      )
    : null;
};

export default CreateNewPost;
