import React, {Component} from 'react';

import List from './List';

class Content extends Component {

    constructor(){
        super();
        
        this.state = { count : 100 }
        
        this.changeCount = this.changeCount.bind(this);
    }
    
    changeCount(){
        this.setState({ count : this.state.count + 10 });
    }
    
    render(){
        
        let number = this.state.count; 
        
        return (
            <div>
                <List num={number} cc={this.changeCount}/>
            </div>
        )
    }
}

export default Content;