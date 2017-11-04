import React, {Component} from 'react';
import moment from 'moment';
import './Timer.css';

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {timer: this.getDate()};
    }

    getDate() {
        return new Date();
    }

    getCurrentDate() {
        return moment(this.state.timer).format('MMM Do YY');
    }

    getCurrentTime() {
        return moment(this.state.timer).format('H:mm:ss');
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ timer: this.getDate() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const currentDate = this.getCurrentDate().toString();
        const currentTime = this.getCurrentTime().toString();

        return (
            <div className='Timer'>
                <div className='Date'>
                    {currentDate}
                </div>
                <div className='Time'>
                    {currentTime}
                </div>
            </div>
        );
    }
}

export default Timer;
