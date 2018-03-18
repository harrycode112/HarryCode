import React, {Component} from 'react';

class Header extends Component {

    render(){
        
        let styles = { 
            color : 'red',
            marginTop : 30
        }
        
        return (
            <div style={styles}>First React App</div>
        )
    }
}

export default Header;