import React, {Component} from 'react';

class Second extends Component {

    render(){
        
        let { func,open,close,num } = this.props;
        
        return (
            <div>
                <h2 onClick={func}>내려받은 데이터는 : {open}</h2>
                <h2>App으로부터 내려받은 데이터는 : {close}</h2>
                <div>{num}</div>
            </div>
        )
    }
}

export default Second;