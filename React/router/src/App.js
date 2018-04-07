import React, {Component} from 'react';
import Header from './Header';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// as 앞은 원래 이름, as 뒤에 붙이는 이름은 별칭

import Home from './route/Home';
import About from './route/About';
import Error from './route/Error';
import Posts from './route/Posts';

// 홈 -> www.xxx.com
// 소개 -> www.xxx.com/about

/*
    토요일 : 10:00 ~ 14:00 프로젝트 신규과정 시작
    토요일 : 14:00 ~ 18:00 C강의장 (보강)
    일요일 : 09:30 ~ 13:30 D강의장 (보강)
    
    Node & create-react-app
    
    변동이 있으면 카페에 올리겠습니다.
*/

class App extends Component {

    render(){
        return (
            <Router>
                <div>
                    <Header />
                    <div className="section">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about/:user" component={About}/>
                            {/*user 라는 변수*/}
                            <Route path="/posts" component={Posts}/>
                            <Route component={Error}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;