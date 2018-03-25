import React, {Component} from 'react';

import './Tag.css';
import Button from './components/Button'
import Box from './Box'

/*
    mount -> 태그가 생성될 때( 붙었을 때 )
    unmount -> 태그가 사라질 때
    
    smart VS dumb 컴포넌트
    
    smart -> 기존 클래스 방식을 사용한다 props와 state, life cycle이 모두 가능하다. 
    dumb -> 함수형 컴포넌트. props 만 받을 때 사용한다. ( 화면을 그리는 용도로만 사용할 때 ) 
    
    LifeCycle ( 생명 주기 )
    
*/

class Tag extends Component {

    constructor(){
        super();
        
        this.state = {
            show : false,
            number : 0
        }
    }
    
    makeBox(){
        this.setState({show : true, number : 0})
    }
    removeBox(){
        this.setState({show : false})
    }
    plusNumber(){
        this.setState({number : this.state.number + 1 })
    }
    toggleBox(){
        this.setState({show : !this.state.show })
    }
    
    render(){
        
        let { show } = this.state;
        
        return (
            <div>
                <h1>React Application</h1>
                <Button content="카드 보기" box={this.makeBox.bind(this)} bgColor="red"/>
                <Button content="숫자 증가" box={this.plusNumber.bind(this)} bgColor="blue"/>
                <Button content="카드 가리기" box={this.removeBox.bind(this)} bgColor="green"/>
                {/*<button onClick={this.makeBox.bind(this)}>상자를 생성하기</button>
                <button onClick={this.removeBox.bind(this)}>상자를 삭제하기</button>
                <button onClick={this.toggleBox.bind(this)}>상자를 생성/삭제하기</button>*/}
                {(show) ? <Box num={this.state.number}/>:null}
                {/* show && <div className="box"></div> */}
            </div>
        )
    }
}

export default Tag;