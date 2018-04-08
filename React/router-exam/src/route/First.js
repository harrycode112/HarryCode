import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css';

class First extends Component {

    constructor(){
        super();
        
        this.state = {
            number : 0,
        }
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
    }
    
    handleUp(){
        this.setState({number : this.state.number + 1});
    }
    
    handleDown(){
        this.setState({number : this.state.number - 1});
    }
    
    render(){
        return (
            <div>
                <div className="count">{this.state.number}</div>
                <button onClick={this.handleUp}>증가</button>
                <button onClick={this.handleDown}>감소</button>
            </div>
        )
    }
}

export default First;