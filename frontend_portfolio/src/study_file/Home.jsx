import React, { useState, useContext } from 'react';
import Modal from './modal.jsx';

function Home() {
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState('');

  return (
    <div className="">
      {/* 해당 값을 다른 컴포넌트로 넘길 때 컴포넌트를 불러오는 곳에 상태값을 꼭 넣어주기 */}
      <Modal modal={modal} setModal={setModal} content={content} />
      <button className="open_modal" onClick={() => setModal(true)}>
        모달 열기
      </button>
      <label htmlFor="inp_modal_content">모달에 들어갈 내용 : </label>
      <input
        type="text"
        className="inp_modal_content"
        id="inp_modal_content"
        onChange={e => setContent(e.target.value)}
      />
    </div>
  );
}

export default Home;
