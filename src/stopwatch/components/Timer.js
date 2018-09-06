import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

import TimeFormat from '../utils/TimeFormat';

class Timer extends Component {

    static proptTypes = {
        time: PropTypes.number
    };

    static defaultProps = {
        time: 0
    };

    render() {
        const { time } = this.props;

        return(
            <div className="Timer">
                { TimeFormat( time )}
            </div>
        );
    }
}

export default Timer;