// import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import classNames from 'classnames/bind';
// import styles from './Modal.module.scss';
// import ModalContent from './ModalContent';
// import { useState } from 'react';

// const cx = classNames.bind(styles);

// const Modal = ({ isShowing, hide }) => {
//   return isShowing
//     ? ReactDOM.createPortal(
//         <>
//           <div className="modal-overlay" />
//           <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
//             <div className={cx('container')}>
//               <ModalContent hide={hide} />
//             </div>
//           </div>
//         </>,
//         document.body,
//       )
//     : null;
// };

// export default Modal;
