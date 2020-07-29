import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalWrapper: React.FC<IModalProps> = ({
  children,
  isOpen,
  setIsOpen,
}) => {
  const [modalState, setModalState] = useState(isOpen);

  useEffect(() => {
    setModalState(isOpen);
  }, [isOpen]);

  return (
    <Modal
      isOpen={modalState}
      ariaHideApp={false}
      shouldCloseOnOverlayClick
      onRequestClose={setIsOpen}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#FCFCFD',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </Modal>
  );
};

export default ModalWrapper;
