import React, {Component} from 'react';
import './Ani.css';

import { CSSTransitionGroup } from 'react-transition-group';

class Ani extends Component {

    constructor(){
        super();
        
        this.state = {
            list : ['first','second','third'],
            keyword : ''
        }
    }
    
    handleKeyPress(e){
        if (e.key === 'Enter') {
            this.handleSubmit()
        }
    }
    
    handleSubmit(){
        this.setState({list:this.state.list.concat([this.state.keyword])});
        this.text = ''
    }
    
    checkFunc(e){
        this.setState({keyword : e.target.value})
    }
    
    render(){
        
        const { list } = this.state; 
        const view = list.map((value,index)=>{
            return <li key={index}>{value}</li>
        });
        const text = document.getElementById('input');
        
        return (
            <div>
                <input type="text" id="input" onKeyPress={this.handleKeyPress.bind(this)} onChange={this.checkFunc.bind(this)} />
                <button onClick={this.handleSubmit.bind(this)}>등록</button>
                <ul>
                    <CSSTransitionGroup transitionName="exam" 
                        transitionEnterTimeout={500} 
                        transitionLeaveTimeout={500}>
                        {view}
                    </CSSTransitionGroup>
                </ul>
            </div>
        )
    }
}

export default Ani;