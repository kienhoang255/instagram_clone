import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

import { BsImage } from 'react-icons/bs';
import { FiArrowLeft } from 'react-icons/fi';

import Button from '../Button/Button';
import AlertModal from './AlertModal';
import useAlertModal from '../../Hooks/useAlertModal';
import ManagerBtnNewPost from '../Button/ManagerBtnNewPost/ManagerBtnNewPost';

import FileBase64 from 'react-file-base64';

import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addImg } from '../../redux/imgFile';

const cx = classNames.bind(styles);

export default function ModalContent({ hide }) {
  //Redux
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.imgFile);
  console.log(selector);

  //Show image
  const [selectedFile, setSelectedFile] = useState({
    id: uuidv4(),
    img: '',
  });
  const [preview, setPreview] = useState();

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile({
        id: uuidv4(),
        img: '',
      });
      return;
    }
    setSelectedFile({ img: e.target.files[1] });
    dispatch(addImg(selectedFile));
  };

  //Check had image
  const { isShowingAlertModal, alertToggle } = useAlertModal();

  return (
    <>
      <button type="button" className={cx('modal-close-button')} data-dismiss="modal" aria-label="Close" onClick={selectedFile ? alertToggle : hide}>
        <span aria-hidden="true">&times;</span>
      </button>
      {selectedFile.img !== '' ? (
        <div className={cx('content')}>
          <div className={cx('header-modal-image')}>
            {/* <Button data-dismiss="modal" aria-label="Close" onClick={alertToggle} className={cx('button-modal-back')}> */}
            <Button
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                console.log(alertToggle() && setSelectedFile({ ...selectedFile, img: '' }));
              }}
              className={cx('button-modal-back')}
            >
              <FiArrowLeft />
            </Button>
            <p>Crop</p>
            <Button
              className={cx('button-modal')}
              onClick={() => {
                // console.log(addImg(selectedFile));
                dispatch(addImg(selectedFile));
              }}
            >
              Next
            </Button>
          </div>
          <div
            className={cx('content-modal-image')}
            style={{
              // backgroundImage: `url(${preview})`,
              backgroundImage: `url(${selector})`,
              backgroundSize: '100% 100%',
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
              {/* <div className={cx('file-base64')}>
                <FileBase64
                  id="modal-input-file"
                  accept="image/*"
                  multiple={false}
                  type="file"
                  onDone={({ base64, name }) => {
                    // console.log({ base64 });
                    setSelectedFile({ ...selectedFile, img: base64 });
                  }}
                />
              </div> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
