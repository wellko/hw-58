import React from 'react';

interface Props extends React.PropsWithChildren {
	type: string,
	onDismiss: React.MouseEventHandler,
	clickDismissable?:boolean,
}

const Alert: React.FC<Props> = ({type, onDismiss, children,clickDismissable}) => {
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

	if (!clickDismissable) {
		alertBlock = (
			<>
				<div
					className={alertClass}
					onClick={onDismiss}
				>
					{children}
				</div>
			</>)
	}

	return alertBlock
};

export default Alert;