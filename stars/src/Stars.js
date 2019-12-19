import React from 'react';
//import ReactDom from 'react-dom';
import Star from './Star';
import PropTypes from 'prop-types';

export default class Stars extends React.Component {
    render() {
        const {count} = this.props;

        if (typeof count === 'number' && count > 0 && count < 6  ) {
            // star
            const helpArr = new Array(count).fill(1);
            //console.log('helpArr',helpArr);
            return (
                <ul className={'card-body-stars u-clearfix'}>
                        {helpArr.map((item, i) => {
                            return (
                                <li key={i}>
                                    <Star />
                                </li>
                            )
                        })}
                </ul>
            );

        } else {
            // null
            return (
                null
            );
        }
    }
}

Star.defaultProps = {
    count : 0
};

Star.propTypes = {
    count : PropTypes.number
};