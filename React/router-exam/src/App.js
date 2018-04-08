import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './style/App.css'
import First from './route/First';
import Second from './route/Second';

class App extends Component {

    constructor(){
        super();
        this.state = {
            title : '1'
        }
    }
    
    render(){
        return (
            <Router>
                <div>
                    <div>
                        <h1>{this.state.title}번 페이지</h1>
                        <Link to="/first" onClick={()=>{this.setState({title : '1'})}}>1번 페이지 이동</Link>
                        <Link to="/second" onClick={()=>{this.setState({title : '2'})}}>2번 페이지 이동</Link>
                    </div>
                    <Route path="/first" component={First}/>
                    <Route path="/second" component={Second}/>
                </div>
            </Router>
        )
    }
}

export default App;