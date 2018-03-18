import React, {Component} from 'react';

import Second from './Second';

/*
    props & state -> 데이터를 관리하기 위한 방법
    
    props -> 부모 컴포넌트로부터 내려받은 데이터
    state -> 자기자신 컴포넌트가 가지고 있는 데이터
    
    state는 직접 수정이 불가합니다(재 렌더링이 되지 않는다).
    virtual DOM 과 관련이 있다.
    그래서 state를 수정할 때는 꼭 this.setState() 함수를 사용해야 한다. 
*/

class First extends Component {
    
    constructor(){
        super();
        this.state = {
            number : 100,
        }
    }
    
    say(){
        alert('First 컴포넌트에 있는 메소드 입니다.');
    }
    
    render(){
        
        let title = 'React Props & State';
        
        return (
            <div>
                <h1 onClick={this.say.bind(this)}>{title}</h1>
                <Second open={title} close={this.props.text} func={this.say.bind(this)} num={this.state.number}/>
            </div>
        )
    }
}

export default First;
