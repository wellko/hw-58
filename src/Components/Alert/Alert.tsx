import React from 'react';

interface Props extends React.PropsWithChildren {
	type: string,
	onDismiss?: React.MouseEventHandler
}

const Alert: React.FC<Props> = ({type, onDismiss, children}) => {
	let alertClass = 'justify-content-between d-flex alert alert-';
	alertClass += type;

	let alertBlock = (<>
		<div
			className={alertClass}
		>
			{children}
			<button className='btn btn-close' type='button' onClick={onDismiss}></button>
		</div>
	</>);

	if (onDismiss === undefined) {
		alertBlock = (
			<>
				<div
					className={alertClass}
				>
					{children}
				</div>
			</>)
	}

	return alertBlock
};

export default Alert;