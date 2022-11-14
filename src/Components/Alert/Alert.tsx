import React from 'react';
import { motion } from "framer-motion";

interface Props extends React.PropsWithChildren {
	show:boolean,
	type: string,
	onDismiss: React.MouseEventHandler,
	clickDismissable?:boolean,
}

const Alert: React.FC<Props> = ({show,type, onDismiss, children,clickDismissable}) => {
	let alertClass = 'justify-content-between d-flex flex-nowrap overflow-hidden alert alert-';

	alertClass += type;

	const animation = {
		open: { opacity: 1, borderRadius: 0, width: 'auto'},
		closed: { opacity: 0, borderRadius:"50%", width: 0},
	}

	let alertBlock = (<>
		<motion.div
			animate={show? 'open': 'closed'}
			variants={animation}
			className={alertClass}
		>
			<p className='text-nowrap m-0'>{children}</p>
			<button className='btn btn-close' type='button' onClick={onDismiss}></button>
		</motion.div>
	</>);

	if (!clickDismissable) {
		alertBlock = (
			<>
				<motion.div
					animate={show? 'open': 'closed'}
					variants={animation}
					className={alertClass}
					onClick={onDismiss}
				>
					<p className='text-nowrap m-0'>{children}</p>
				</motion.div>
			</>)
	}

	return alertBlock
};

export default Alert;