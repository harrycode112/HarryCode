import React, {Component} from 'react';
import './Content.css';

/* JSX에 클래스를 적용 할 때는 className 이라고 작성해야 한다.
    
    리액트 이벤트 종류
    
    onClick
    onMouseover
    onKeyup
*/

import Post from './Post';

class Content extends Component {
    
    talk(){
        alert('안녕하세요 제작자입니다.');
    }
    
    render(){
        return(
            <div>
                <div className="font">React Project</div>
                <button onClick={this.talk.bind(this)}>클릭</button>
                <Post />
            </div>
        )
    }
}

export default Content;