import React, {Component} from 'react';

class Item extends Component {

    render(){
        
        const { name, phone } = this.props;
        
        return (
            <li>{name} {phone}</li>
        )
    }
}

export default Item;