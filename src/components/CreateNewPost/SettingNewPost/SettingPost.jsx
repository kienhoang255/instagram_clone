import React, { useLayoutEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SettingPost.module.scss';
import Button from '../../Button/Button';
import { FiArrowLeft } from 'react-icons/fi';
import AlertModal from '../Alert/AlertModal';
import useAlertModal from '../../../Hooks/useAlertModal';
import ManagerBtnNewPost from '../../Button/ManagerBtnNewPost/ManagerBtnNewPost';
import Filter from './Filter';
import SlickImg from './SlickImg';
import SharePost from '../SharePost/SharePost';

const cx = classNames.bind(styles);
export default function SettingPost({ setPreview, setSelectedFile, hide }) {
  const { isShowingAlertModal, alertToggle } = useAlertModal();
  const [next, setNext] = useState(false);
  const [caption, setCaption] = useState(false);
  const [widthContainer, setWidthContainer] = useState('45%');
  const [widthContent, setWidthContent] = useState('100%');
  const [header, setHeader] = useState('Crop');
  const [nextBtn, setNextBtn] = useState('Next');
  const [count, setCount] = useState(0);
  const [share, setShare] = useState(false);
  const onClickNext = () => {
    if (!next) {
      setNext(true);
      setWidthContainer('100%');
      setWidthContent('70%');
    }
    if (next) {
      setCaption(true);
    }
    setCount(count + 1);
  };
  const onClickBack = () => {
    if (next && caption) {
      setCaption(false);
    } else if (next && !caption) {
      setNext(false);
      setWidthContainer('45%');
      setWidthContent('100%');
    }
    if (!next) {
      alertToggle();
    }
  };

  useLayoutEffect(() => {
    if (next && !caption) setHeader('Edit');
    else if (caption) setHeader('Create new post');
    else setHeader('Crop');
    if (caption) setNextBtn('Share');
    else setNextBtn('Next');
  }, [caption, next]);

  useLayoutEffect(() => {
    if (count >= 3 && next && caption && nextBtn === 'Share') setShare(true);
  }, [count, next, caption, nextBtn]);

  return (
    <>
      {share ? (
        <SharePost hide={hide} />
      ) : (
        <>
          <button type="button" className={cx('modal-close-button')} data-dismiss="modal" aria-label="Close" onClick={alertToggle}>
            &times;
          </button>
          <div className={cx('settingPost-container')} style={{ width: `${widthContainer}` }}>
            <div className={cx('settingPost-header')}>
              <Button data-dismiss="modal" aria-label="Close" onClick={onClickBack} className={cx('settingPost-btn-back')}>
                <FiArrowLeft />
              </Button>
              <p>{header}</p>
              <Button className={cx('settingPost-btn-next')} onClick={onClickNext}>
                {nextBtn}
              </Button>
            </div>
            <div className={cx('settingPost-content')}>
              <div className={cx('settingPost-img-content')} style={{ width: `${widthContent}` }}>
                <SlickImg widthContent={widthContent} next={next} />
                {!next && <ManagerBtnNewPost className={cx('settingPost-btn-manager')} />}
              </div>
              {next && <Filter caption={caption} />}
            </div>
          </div>
          <AlertModal isShowingAlertModal={isShowingAlertModal} alertHide={alertToggle} setPreview={setPreview} setSelectedFile={setSelectedFile} />
        </>
      )}
    </>
  );
}
