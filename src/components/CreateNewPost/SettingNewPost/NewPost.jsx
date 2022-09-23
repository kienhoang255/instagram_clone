import React, { createContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SettingPost.module.scss';
import { BsImage } from 'react-icons/bs';
import SettingPost from './SettingPost';

const cx = classNames.bind(styles);
export const ImgPreview = createContext();

export default function SettingNewPost({ hide }) {
  //Show image
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
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

  return (
    <ImgPreview.Provider value={preview}>
      {selectedFile ? (
        <>
          <SettingPost setSelectedFile={setSelectedFile} setPreview={setPreview} hide={hide} />
        </>
      ) : (
        <>
          <button type="button" className={cx('modal-close-button')} data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
          <div className={cx('newPost-content')}>
            <div className={cx('newPost-header-modal')}>Create new post</div>
            <div className={cx('newPost-content-modal')}>
              <span>
                <BsImage />
              </span>
              <p>Drag photo and videos here</p>
              <label htmlFor="modal-input-file" className={cx('newPost-modal-button')}>
                Select from computer
              </label>
              <input className={cx('input-file')} type="file" id="modal-input-file" name="avatar" accept="image/*" onChange={onSelectFile} />
            </div>
          </div>
        </>
      )}
    </ImgPreview.Provider>
  );
}
