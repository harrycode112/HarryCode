import React, {Component} from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Exam from './components/Exam';
import Phone from './components/Phone';

class App extends Component {

    render(){
        return (
            <div>
                <Phone />
            </div>
        )
    }
}

export default App;