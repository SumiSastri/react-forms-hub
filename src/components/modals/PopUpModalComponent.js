import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

ReactModal.setAppElement('body');

export class PopUpModalComponent extends Component {
	constructor() {
		super();

		this.state = {
			modalIsOpen: false
		};

		this.initialState = this.state;
		this.openModal = this.openModal.bind(this);
	}

	openModal = () => {
		console.log('this is:', this);
		this.setState((state) => ({
			// set state to the opposite of false which is true
			modalIsOpen: !state.modalIsOpen
		}));
		console.log('openmodal:', this.state);
	};

	// factory functions for props
	// onAfterOpen={handleAfterOpenFunc/* Function that will be run after the modal has opened. */}
	// onAfterClose={handleAfterCloseFunc/* Function that will be run after the modal has closed. */}

	render() {
		const {
			aria,
			className,
			children,
			closeTimeoutMS,
			contentLabel,
			isOpen,
			onAfterOpen,
			onAfterClose,
			onRequestClose,
			shouldCloseOnOverlayClick,
			shouldCloseOnEsc
		} = this.props;
		return (
			<section>
				<ReactModal
					aria={aria}
					// aria={{
					//     labelledby: labelledby,
					//     describedby: describedby,
					// }}
					className={className}
					// className={{
					//     afterOpen: {afterOpen},
					//     base: classNames(),
					//     beforeClose: {beforeClose}
					// }}
					closeTimeoutMS={closeTimeoutMS}
					contentLabel={contentLabel}
					isOpen={isOpen}
					onAfterOpen={onAfterOpen}
					onAfterClose={onAfterClose}
					onRequestClose={onRequestClose}
					shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
					shouldCloseOnEsc={shouldCloseOnEsc}
				>
					{
						children
						// <h1 id="heading">Alert</h1>
						// <div id="full_description">
						//     <p>Description goes here.</p>
						// </div>
					}
				</ReactModal>
			</section>
		);
	}
}

PopUpModalComponent.propTypes = {
	contentLabel: PropTypes.string,
	children: PropTypes.any,
	className: PropTypes.string,
	labelledBy: PropTypes.string,
	onClose: PropTypes.func,
	onAfterOpen: PropTypes.func,
	onAfterClose: PropTypes.func,
	onRequestClose: PropTypes.func,
	shouldCloseOnOverlayClick: PropTypes.bool,
	shouldCloseOnEsc: PropTypes.bool
};

export default PopUpModalComponent;
