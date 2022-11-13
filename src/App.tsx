import React, {useState} from 'react';
import Modal from "./Components/Modal/Modal";
import Alert from "./Components/Alert/Alert";

function App() {

  const [showModal, setShowModal] = useState(false);

  const cancel = () => setShowModal(false);

  const closeAlert = () => console.log('Close button pushed');

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
        <Alert type='danger' onDismiss={closeAlert}> Some Alert </Alert>
        <Alert type="success">This is a success type alert</Alert>
    </div>
  );
}

export default App;
