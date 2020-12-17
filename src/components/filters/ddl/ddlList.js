import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const formatItem = (props) => {
    let {
        item,
        itemClassName,
        level,
        onChange,
        value,
    } = props;

    let style = {},
        subLevelIcon = null,
        itemsList = [];

    if (level > 0) {
        style.paddingLeft = level * 12 + 'px';
        subLevelIcon = <i className='fa fa-fw fa-angle-right'></i>;
    }

    const listItemClassName = classNames({
        'nested-dropdown__list-item': true,
        'nested-dropdown__list-item--selected': (item.value === value),
    });

    let listItem = <button className={ classNames('nested-dropdown__item', itemClassName) } type='button' onClick={ onChange.bind(null, item.value) } style={ style } >
        { subLevelIcon }
        { item.label }
    </button>;

    itemsList.push(<li key={ 'item_' + item.value } className={ listItemClassName }>{ listItem }</li>);

    item.children && item.children.forEach((child) => {
        const childProps = {
            ...props,
            item: child,
            level: props.level + 1,
        };

        itemsList = itemsList.concat(formatItem(childProps));
    });

    return itemsList;
};

export const NestedDdlList = ({
    items,
    itemClassName,
    listClassName,
    onChange,
    value,
}) => {

    let itemsList = [];

    items.forEach((item) => {
        const props = {
            item,
            itemClassName,
            level: 0,
            onChange,
            value,
        };

        itemsList = itemsList.concat(formatItem(props));
    });

    return <ul className={ classNames('nested-dropdown__list', listClassName) }>{ itemsList }</ul>;
};

NestedDdlList.propTypes = {
    items: PropTypes.array.isRequired,
    itemClassName: PropTypes.string,
    listClassName: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};
