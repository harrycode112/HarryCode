import React from 'react';

const Button = (props) => {
    
    let styles = {
        backgroundColor : props.bgColor,
        borderWidth : 1,
        borderStyle : 'solid',
        borderColor : props.bgColor,
        color : 'white'
    }
    
    return (
        <button style={styles} onClick={props.box}>{props.content}</button>
    )
}

export default Button