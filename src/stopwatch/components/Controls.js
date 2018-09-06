import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Controls.css';
import {Button} from 'reactstrap';

class Controls extends Component {

    static proptTypes = {
        isRunning   : PropTypes.bool,
        isStarted   : PropTypes.bool,
        start       : PropTypes.func.isRequired,
        stop        : PropTypes.func.isRequired,
        reset       : PropTypes.func.isRequired,
        addLapTime  : PropTypes.func.isRequired
    };

    static defaultProps = {
        isRunning : false,
        isStarted : false,
    };

    render() {
        const { isRunning, isStarted, start, stop, reset, addLapTime } = this.props;

        return (
            <div className="Controls col-12">
                { !isRunning ?
                    <Button
                        onClick={ start }
                        color="success"
                        className="Controls_button"
                        ref="startBtn" > Start </Button>
                    : null }

                { isRunning ?
                    <Button
                        onClick={ stop }
                        color="danger"
                        className="Controls_button"
                        ref="stopBtn" > Stop </Button>
                    : null }

                { !isRunning ?
                    <Button
                        onClick={ reset }
                        color="danger"
                        disabled={ !isStarted }
                        className="Controls_button"
                        ref="resetBtn" > Reset </Button>
                    : null }

                { isRunning ?
                    <Button
                        onClick={ addLapTime }
                        disabled={ !isRunning }
                        className="Controls_button"
                        ref="lapBtn" > Lap Time </Button>
                    : null }
            </div>
        );
    }
}

export default Controls;

