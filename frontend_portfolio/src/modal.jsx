import React from 'react';

// 다른 컴포넌트에서 값을 받아올 때에는 해당 컴포넌트에서 설정한 prop를 받아와야만 가능함
function Modal({ modal, setModal, content }) {
  return (
    <div className="test">
      {modal && (
        <div className="modal">
          <button className="close" onClick={() => setModal(false)}>
            모달 닫기
          </button>
          <div className="inner_wrap">
            {/* <p className="content">{content}</p> */}
            <p className="content">
              {content ? content : 'Input에 입력된 내용이 없습니다.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
