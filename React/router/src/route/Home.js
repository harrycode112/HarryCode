import React, {Component} from 'react';

class Home extends Component {

    movePage(){
        this.props.history.push('/about/btn');
    }
    
    render(){
        return (
            <div>
                <h1>Home</h1>
                <button onClick={this.movePage.bind(this)}>소개 페이지로 이동</button>
            </div>
        )
    }
}

export default Home;