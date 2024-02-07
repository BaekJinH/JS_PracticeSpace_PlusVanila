import React, { useState, useContext } from 'react';
import Modal from './modal.jsx';

function Home() {
  const [modal, setModal] = useState(false);
  const value = useContext('');

  return (
    <>
      <Modal modal={modal} setModal={setModal} />
      <button className="open_modal" onClick={() => setModal(true)}>
        모달 열기
      </button>
      <label htmlFor="">모달에 들어갈 내용 : </label>
      <input
        type="text"
        className="inp_modal_content"
        id="inp_modal_content"
        onInput={value}
      />
      {/* input 내용을 Modal p.content 안 {modal} 에 값을 넣어야 함 => 해당 value의 입력 값을 저장하는것 부터가 중요 => 어떻게 ?? 내가 작성한 onInput = value 방식이 잘못되었는지? : useContext 사용법이 잘못되었는지 */}
    </>
  );
}

export default Home;
