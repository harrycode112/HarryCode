import React, {Component} from 'react';

/*
    npm -> node package manager
    npm install react-rating --save
*/
import Rating from 'react-rating';

class Score extends Component {
    
    constructor(){
        super();
        this.state = {
            starValue : ''
        }
    }

    handleChange(score){
       this.setState({starValue : score});
    }
    
    render(){
        return (
            <div>
                <h1>Score</h1>
                <Rating start={0} stop={10} step={2} onChange={this.handleChange.bind(this)}/>
                <div>{this.state.starValue}</div>
            </div>
        )
    }
}

export default Score;