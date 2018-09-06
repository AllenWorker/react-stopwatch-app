import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LapTime.css';

import TimeFormat from '../utils/TimeFormat';

class LapTime extends  Component {
    static proptTypes = {
        lap : PropTypes.number,
        time : PropTypes.number
    };

    static defaultProps = {
        lap : 0,
        time : 0
    };

    render() {
        const { lap, time} = this.props;

        return (
            <div className="LapTime">
               <span className="LapTime_lap">{ lap }</span>
               <span className="LapTime_time">{ TimeFormat( time )}</span>
            </div>
        );
    }
}

export default LapTime;