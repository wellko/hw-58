import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import {Button} from "../../types";
import { motion } from "framer-motion";

interface Props extends React.PropsWithChildren {
	show: boolean,
	title: string,
	onClose: React.MouseEventHandler,
	buttons: Button[],
}

const animation = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: "-100%" },
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

			<motion.div
				animate={show? 'open': 'closed'}
				variants={animation}
				className="modal show"
				style={{display: 'block'} }
				onClick={onClose}>
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
			</motion.div>
</>);
};

export default Modal;