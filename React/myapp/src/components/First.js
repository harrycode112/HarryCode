import React, {Component} from 'react';

import Second from './Second';

class First extends Component {

    render(){
        return (
            <div>
                <Second />
            </div>
        )
    }
}

export default First;