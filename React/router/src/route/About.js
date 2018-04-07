import React, {Component} from 'react';

/*

    react-router-dom
    항상 3가지 정보를 가지고 있다.
    history
    match
    location
    
*/

class About extends Component {

    render(){
        
        console.log(this.props.match.params.user)
        
        return (
            <div>
                <h1>About {this.props.match.params.user}</h1>
            </div>
        )
    }
}

export default About;