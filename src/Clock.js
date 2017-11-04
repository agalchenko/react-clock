import React, {Component} from 'react';
import moment from 'moment';
import './Clock.css';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {date: this.getDate()};
    }

    getDate() {
        return new Date();
    }

    getCurrentDate() {
        return moment(this.state.date).format('MMM Do YY');
    }

    getCurrentTime() {
        return moment(this.state.date).format('H:mm:ss');
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({date: this.getDate()}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const currentDate = this.getCurrentDate().toString();
        const currentTime = this.getCurrentTime().toString();

        return (
            <div className='Clock'>
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

export default Clock;
