import React, {Component} from 'react';
import axios from 'axios';

import Client from './Client';
import Score from './Score';
import Timer from './Timer';

class App extends Component {

    handleClick(){
        // https://httpbin.org/get 통신을 요청한다. 
        axios.get('https://httpbin.org/get')
            .then((response)=>{ // 성공하면 실행
            console.log(response.data);
        })
            .catch((error)=>{ // 실패하면 실행
            console.log(error);
        });
    }
    
    render(){
        return (
            <div>
                <Timer />
            </div>
        )
    }
}

export default App;