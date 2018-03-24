import React, {Component} from 'react';

class List extends Component {
    
    render(){
        
        const { num, cc } = this.props;
        
        return (
            <div>
                <h1>{this.props.num}</h1>
                <button onClick={this.props.cc}>숫자증가</button>
            </div>
        )
    }
}

export default List;