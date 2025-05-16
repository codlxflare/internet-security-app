import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export default function Modal({ isOpen = true, title, children, onClose }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-dialog"
      overlayClassName="modal-backdrop"
    >
      <div className="modal-content p-4">
        <h5>{title}</h5>
        <div className="my-3">{children}</div>
        <button className="btn btn-primary" onClick={onClose}>ОК</button>
      </div>
    </ReactModal>
  );
}
