import React, {Component} from 'react';
import '../style/style.css';

const Count = (props) => {
    return (
        <div>
            <div className="count">{props.number}</div>
            <button onClick={props.handleUp}>증가</button>
            <button onClick={props.handleDown}>감소</button>
        </div>
    )
}

export default Count;