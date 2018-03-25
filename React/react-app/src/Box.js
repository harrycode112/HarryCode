import React, {Component} from 'react';

import './Box.css'

// 생명주기(lifecycle)

/*
    예약된 메소드들이다
    
    constructor -> 가장 먼저 실행되는 메소드
    componentWillMount -> 최초 한번 mount가 되기전에 실행된다. 
    componentDidMount -> 최초 한번 mount가 되고난 후 실행된다. ( ajax, setInterval, http 등을 여기서 실행시켜준다. )
    
    componentWillReceiveProps -> 컴포넌트가 props를 새로 받았을 때 실행된다. ( 여기서 setState 적용하면 추가로 렌더링 되지 않는다. )
    shouldComponentUpdate -> props 혹은 state 가 변경되었을 때 렌더링을 할지 말지 정한다. 
    ( return 값에 따라서 렌더링을 조절할 수 있다. )
    
    componentWillUpdate -> 컴포넌트가 업데이트 되기 전에 실행된다. (setState를 절대 사용하지 않는다.)
    componentDidUpdate -> 컴포넌트가 업데이트 되고난 후에 실행된다. 
    
    componentWillUnmount -> mount가 해제되었을 때
*/

class Box extends Component {

    constructor(){
        super();
        console.log('constructor');
        
        this.state = {count : 0,}
    }
    
    componentWillMount(){
        console.log('componentWillMount');
    }
    
    componentDidMount(){
        console.log('componentDidMount');
        this.setState({count : 1})
    }
    
    componentWillUpdate(nextProps,nextState){
        console.log('componentWillUpdate');
    }
    
    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate');
    }
    
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate');
        if (nextProps.num >= 5){
            return true;
        } else {
            return false;
        }
    }
    
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps');
        console.log(nextProps);
    }
    
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    
    render(){
        
        console.log('render');
        
        return (
            <div className="box">{this.props.num}</div>
        )
    }
}

export default Box;