import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { BsImage } from 'react-icons/bs';
import Button from '../Button/Button';
import { FiArrowLeft } from 'react-icons/fi';
import AlertModal from './AlertModal';
import useAlertModal from '../../Hooks/useAlertModal';
import ManagerBtnNewPost from '../Button/ManagerBtnNewPost/ManagerBtnNewPost';
import { createContext } from 'react';

const cx = classNames.bind(styles);

export default function ModalContent({ hide }) {
  //Show image
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const fileImages = createContext;
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  //Check had image
  const { isShowingAlertModal, alertToggle } = useAlertModal();

  return (
    <>
      <button type="button" className={cx('modal-close-button')} data-dismiss="modal" aria-label="Close" onClick={selectedFile ? alertToggle : hide}>
        <span aria-hidden="true">&times;</span>
      </button>
      {selectedFile ? (
        <div className={cx('content')}>
          <div className={cx('header-modal-image')}>
            <Button data-dismiss="modal" aria-label="Close" onClick={alertToggle} className={cx('button-modal-back')}>
              <FiArrowLeft />
            </Button>
            <p>Crop</p>
            <Button className={cx('button-modal')}>Next</Button>
          </div>
          <div
            className={cx('content-modal-image')}
            style={{
              backgroundImage: `url(${preview})`,
            }}
          >
            <input className={cx('input-file')} type="file" id="modal-input-file" name="avatar" accept="image/*" onChange={onSelectFile} />
            <ManagerBtnNewPost className={cx('btn-modal')} />
          </div>
          <AlertModal isShowingAlertModal={isShowingAlertModal} alertHide={alertToggle} preview={setPreview} selectedFile={setSelectedFile} />
        </div>
      ) : (
        <>
          <button type="button" className={cx('modal-close-button')} data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
          <div className={cx('content')}>
            <div className={cx('header-modal')}>Create new post</div>
            <div className={cx('content-modal')}>
              <span>
                <BsImage />
              </span>
              <p>Drag photo and videos here</p>
              <label htmlFor="modal-input-file" className={cx('modal-button')}>
                Select from computer
              </label>
              <input className={cx('input-file')} type="file" id="modal-input-file" name="avatar" accept="image/*" onChange={onSelectFile} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
