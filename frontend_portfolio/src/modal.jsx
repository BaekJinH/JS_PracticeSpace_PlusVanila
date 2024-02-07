import React from 'react';
import ModalData from './data/modal_data.json';

function Modal({ modal, setModal, value }) {
  return (
    <div className="test">
      {modal && (
        <div className="modal">
          <button className="close" onClick={() => setModal(false)}>
            모달 닫기
          </button>
          <div className="inner_wrap">
            <p className="content">{modal}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
