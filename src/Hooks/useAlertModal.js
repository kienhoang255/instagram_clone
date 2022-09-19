import { useState } from 'react';

const useModal = () => {
  const [isShowingAlertModal, setIsShowingAlertModal] = useState(false);

  function alertToggle() {
    setIsShowingAlertModal(!isShowingAlertModal);
  }

  return {
    isShowingAlertModal,
    alertToggle,
  };
};

export default useModal;
