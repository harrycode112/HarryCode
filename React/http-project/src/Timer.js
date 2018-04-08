import React, {Component} from 'react';
import Countdown from 'react-countdown-now';

class Timer extends Component {
    
    handleEnd(){
        alert('a');
    }
    
    render(){
        return (
            <div>
                <h1>Timer</h1>
                <Countdown date={Date.now() + 5000} onComplete={this.handleEnd.bind(this)}/>
            </div>
        )
    }
}

export default Timer;