/*
    This side slider CSS is defined to use 400px width by default.
    To override this, pass `wrapperClassName: 'my-class'` to the props, then
        in the CSS of your component, use:
            .my-class: <overrides here, see less file>
            .my-class.side-slider--before-close: <overrides here, see less file>
*/
import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import classNames from 'classnames';


ReactModal.setAppElement('body');

export class SideSlider extends React.Component {
    constructor() {
        super();

        this.handleCloseSideSlider = this.handleCloseSideSlider.bind(this);
    }

    handleCloseSideSlider() {
        this.props.onClose && this.props.onClose();
    }

    render() {
        const {
            contentClassName,
            children,
            closeOnOverlayClick,
            labelledBy,
            show,
            wrapperClassName,
        } = this.props;

        return (<ReactModal
            aria={ { labelledby: labelledBy || 'side-slider__title' } }
            className={ {
                afterOpen: 'side-slider--after-open',
                base: classNames('side-slider', wrapperClassName),
                beforeClose: 'side-slider--before-close',
            } }
            closeTimeoutMS={ 150 }
            isOpen={ show }
            onRequestClose={ this.handleCloseSideSlider }
            overlayClassName='side-slider__overlay'
            shouldCloseOnEsc={ false }
            shouldCloseOnOverlayClick={ closeOnOverlayClick === undefined ? false : closeOnOverlayClick }
        >
            <div className={ classNames('side-slider__content-wrapper', contentClassName) }>
                { children }
            </div>
        </ReactModal>);
    }
}

SideSlider.propTypes = {
    children: PropTypes.any,
    closeOnOverlayClick: PropTypes.bool,
    contentClassName: PropTypes.string,
    labelledBy: PropTypes.string,
    onClose: PropTypes.func,
    show: PropTypes.bool,
    wrapperClassName: PropTypes.string,
};
