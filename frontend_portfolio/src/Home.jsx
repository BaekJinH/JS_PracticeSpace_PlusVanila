import React, { useState, useContext } from 'react';
import Modal from './modal.jsx';

function Home() {
  const [modal, setModal] = useState(false);
  const value = useContext('test');

  return (
    <>
      <Modal modal={modal} setModal={setModal} />
      <button className="open_modal" onClick={() => setModal(true)}>
        모달 열기
      </button>
      <input type="text" className="inp_modal_content" />
    </>
  );
}

export default Home;
