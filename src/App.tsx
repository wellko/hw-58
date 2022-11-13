import React, {useState} from 'react';
import Modal from "./Components/Modal/Modal";

function App() {

  const [showModal, setShowModal] = useState(false);

  const cancel = () => setShowModal(false);


  return (
    <div className='container-fluid text-center'>
      <button
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
      >
        Call Modal
      </button>
      <Modal
          show={showModal}
          onClose={cancel}
          title="Some kinda modal title"
      >
        <p>This is modal content</p>
      </Modal>
    </div>
  );
}

export default App;
