// import React from 'react';
// import ReactDOM from 'react-dom';
// import classNames from 'classnames/bind';
// import styles from './Modal.module.scss';
// import Button from '../Button/Button';

// const cx = classNames.bind(styles);

// const AlertModal = ({ isShowingAlertModal, alertHide, setPreview, setSelectedFile }) => {
//   //deleteFile
//   const handleOnClick = () => {
//     setPreview(undefined);
//     setSelectedFile(undefined);
//   };
//   return isShowingAlertModal
//     ? ReactDOM.createPortal(
//         <React.Fragment>
//           <div className="alert-modal-overlay" />
//           <div className="alert-modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="alertdialog">
//             <div className={cx('alert-container')}>
//               <div className={cx('alter-content')}>
//                 <div className={cx('alert-header')}>
//                   <p>Discard post?</p>
//                   <p>If you leave, your edits wont't be saved</p>
//                 </div>
//                 <div className={cx('alert-footer')}>
//                   <Button className={cx('alert-discard')} onClick={handleOnClick}>
//                     Discard
//                   </Button>
//                   <Button className={cx('alert-cancel')} onClick={alertHide}>
//                     Cancel
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </React.Fragment>,
//         document.body,
//       )
//     : null;
// };

// export default AlertModal;
