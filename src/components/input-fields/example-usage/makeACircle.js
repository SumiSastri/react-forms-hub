import React from 'react';
import PropTypes from 'prop-types';

export class Circle extends React.PureComponent {
    render() {
        const { className, roleIcon, showOuter } = this.props;
        let outerRing;
        let centerX = 50;
        let outerStrokeWidth;
        let innerStrokeWidth;
        let outerRadius;
        let innerRadius;
        let transform = 'translate(28 28) scale(.44 .44)';

        if (showOuter) {
            outerStrokeWidth = 12;
            innerStrokeWidth = 8;
            outerRadius = centerX - outerStrokeWidth;
            innerRadius = centerX - innerStrokeWidth / 2;
            innerRadius = outerRadius - innerStrokeWidth;
            transform = 'translate(34 34) scale(.32 .32)';

            outerRing = <circle className='icon__circle-outer'
                cx={ centerX }
                cy={ centerX }
                r={ outerRadius }
                strokeWidth={ outerStrokeWidth * 2 } />;

        } else {
            innerStrokeWidth = 12;
            innerRadius = centerX - innerStrokeWidth / 2;
        }

        return (<svg className={ className } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
            <g>
                { outerRing }
                <circle className='icon__circle-inner'
                    cx={ centerX }
                    cy={ centerX }
                    r={ innerRadius }
                    strokeWidth={ innerStrokeWidth } />
                { roleIcon && <use className='icon__role-icon' transform={ transform } xlinkHref={ `#${roleIcon}` } /> }
            </g>
        </svg>);
    }
}

Circle.propTypes = {
    className: PropTypes.string,
    roleIcon: PropTypes.string,
    showOuter: PropTypes.bool,
};
