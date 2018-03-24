import React, {Component} from 'react';

/*
    state는 값을 변경할 때 직접 변경을 하지 않는다.
    만약 값을 변경하고 싶을 땐 setState 메소드를 사용해서 변경해야 한다.
    
    Why?
    : setState 메소드를 사용해서 state의 값이 변경되면 해당 컴포넌트는 다시 render를 한다. 
    
    다시 render가 될 때는 기존에 태그들 중에서 변경된 부분만 알아서 다시 그린다. 
    -> virtual DOM
        : 기존의 DOM구조를 메모리에 저장해뒀다가 다시 DOM을 그릴 때 기존 DOM과 비교한 후 변경된 부분만 업데이트를 한다. 
*/

class Header extends Component {

    constructor(){
        super();
        
        this.state = { number : 20, }
    }
    
    handleClick(){
        this.setState({ number : this.state.number + 1 });
    }
    
    render(){
        
        let { number } = this.state
        
        return (
            
            <div>
                <h1>Header</h1>
                <div>Header 컴포넌트가 가지고 있는 데이터는 : {number}</div>
                <button onClick={this.handleClick.bind(this)}>숫자증가</button>
            </div>
        )
    }
}

export default Header;