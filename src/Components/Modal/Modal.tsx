import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import {Button} from "../../types";

interface Props extends React.PropsWithChildren {
	show: boolean,
	title: string,
	onClose: React.MouseEventHandler,
	buttons: Button[],
}

const Modal: React.FC<Props> = ({show, title, onClose, buttons, children}) => {
	let btnClass = 'btn btn-';
	const footer = buttons.map((item, index) =>
		(
			<button
				type='button'
				key={index}
				className={btnClass + item.type}
				onClick={item.onClick}
			>{item.label}</button>
		)
	)
	return (
		<>
			<Backdrop show={show}/>
			<div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={onClose}>
				<div className="modal-dialog" onClick={e => e.stopPropagation()}>
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5">{title}</h1>
							<button type="button" className="btn-close" onClick={onClose}></button>
						</div>
						<div className='modal-body'>
							{children}
						</div>
						<div className='modal-footer'>
							{footer}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;