import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export class ErrorList extends React.PureComponent {
    render() {
        const { className, errors, title } = this.props;

        let errorIcon,
            errorsNode,
            titleNode;

        if (title) {
            titleNode = <span className='error'>
                <i className='fa fa-lg fa-warning'></i> <span className='error__text'>{ title }</span>
            </span>;

        } else {
            errorIcon = <i className='error-list__icon fa fa-lg fa-warning'></i>;
        }

        if (errors && errors.length) {
            errorsNode = <div>{ errorIcon } <ul className='error-list__list'>
                { errors.map((e, i) => <li key={ 'error_' + i } className='error-list__item'> { e.message || e }</li>) }
            </ul></div>;
        }

        return (<div className={ classnames('error-list', className) }>
            { titleNode }
            { errorsNode }
        </div>);
    }
}

ErrorList.propTypes = {
    className: PropTypes.string,
    errors: PropTypes.array,
    title: PropTypes.string,
};
