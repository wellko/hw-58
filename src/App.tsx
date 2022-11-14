import React, { useState} from 'react';
import Modal from "./Components/Modal/Modal";
import Alert from "./Components/Alert/Alert";


function App() {

	const [showModal, setShowModal] = useState(false);

	const cancel = () => setShowModal(false);

	const [showAlertWithButton, setShowAlertWithButton] = useState(true);

	const closeAlertWithButton = () => setShowAlertWithButton(false);

	const [showAlert, setShowAlert] = useState(true);

	const closeAlert = () => setShowAlert(false);

	const continues = () => alert('you clicked continue button');

	return (
		<div className='container-fluid text-center mt-5'>
			<button
				className="btn btn-primary m-5"
				onClick={() => setShowModal(true)}
			>
				Call Modal
			</button>

			<button
				className="btn btn-danger m-5"
				onClick={() => setShowAlertWithButton(true)}
			>
				Call Warning
			</button>

			<button
				className="btn btn-success m-5"
				onClick={() => setShowAlert(true)}
			>
				Call Success
			</button>

			<Modal
				show={showModal}
				onClose={cancel}
				title="Some kinda modal title"
				buttons={[
					{type: 'primary', label: 'Continue', onClick: continues},
					{type: 'danger', label: 'Close', onClick: cancel}
				]}
			>
				<p>This is modal content</p>
			</Modal>

			<Alert type='danger' show={showAlertWithButton} clickDismissable onDismiss={closeAlertWithButton}> This is a warning type alert </Alert>
			<Alert type="success" show={showAlert} onDismiss={closeAlert}>This is a success type alert</Alert>
		</div>
	);
}

export default App;
