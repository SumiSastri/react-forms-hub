import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';
import { NestedDropDownList } from './list';

export const findItem = (items, value) => {

    if (!items || !items.length) {
        return null;
    }

    let foundItem,
        i,
        item;

    for (i = 0; i < items.length; i++) {
        item = items[i];

        if (item.value === value) {
            foundItem = item;
            break;
        }

        if (item.children) {
            foundItem = findItem(item.children, value);

            if (foundItem) {
                break;
            }
        }
    }

    return foundItem;
};

export class NestedDropDown extends React.Component {
    constructor() {
        super();

        this.state = {
            isOpen: false,
        };

        this.onChange = this.onChange.bind(this);
        this.toggleCursor = this.toggleCursor.bind(this);
        this.togglePanel = this.togglePanel.bind(this);
    }

    handleClickOutside() {
        // Only sets a state (and therefore re-render), when DD is visible.
        if (this.state.isOpen) {
            this.setState({ isOpen: false });
            this.toggleCursor(false);
        }
    }

    onChange(value) {
        this.setState({ isOpen: false });
        this.props.onChange && this.props.onChange(value);
        // TODO: set focus to outer button.
    }

    toggleCursor(show) {
        // Some form of touch events detection...
        if(matchMedia('(pointer:coarse)').matches) {
            document.body.style.cursor = show ? 'pointer' : 'auto';
        }
    }

    togglePanel() {
        const isVisible = this.state.isOpen;

        this.setState({ isOpen: !isVisible });
        this.toggleCursor(!isVisible);
        // TODO: set focus to selected option.
    }

    render() {
        const { className, items, defaultItem, value } = this.props;

        const selectedItem = findItem(items, value);
        const label = selectedItem ? selectedItem.label : (defaultItem ? defaultItem.label : (items.length ? items[0].label : null));
        const finalItems = [];

        if (defaultItem) {
            finalItems.unshift(defaultItem);
        }

        const listProps = {
            items: finalItems.concat(items),
            value,
            onChange: this.onChange,
        };

        let panel;

        let classes = {
            'nested-dropdown': true,
            'nested-dropdown--open': this.state.isOpen,
        };

        if (className) {
            classes[className] = true;
        }

        let ddClassNames = classNames(classes);

        if (this.state.isOpen) {
            panel = <div className='nested-dropdown__panel'>
                <NestedDropDownList  { ...listProps } />
            </div>;
        }

        return (<div className={ ddClassNames }>
            <button tabIndex={ this.state.isOpen ? -1 : 0 } onClick={ this.togglePanel } className='nested-dropdown__toggle'>
                { label }
            </button>
            { panel }
        </div>);
    }
}

export default enhanceWithClickOutside(NestedDropDown);

NestedDropDown.propTypes = {
    className: PropTypes.string,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultItem: PropTypes.object,
    value: PropTypes.string,
};
