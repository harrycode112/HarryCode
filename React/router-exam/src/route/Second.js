import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Count from '../Components/Count';
import '../style/style.css';

class Second extends Component {

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
                <Count number={this.state.number} handleUp={this.handleUp} handleDown={this.handleDown}/>
            </div>
        )
    }
}

export default Second;