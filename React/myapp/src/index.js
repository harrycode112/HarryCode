// 시작은 index.js(endpoint)부터 한다. 
// CRA 만들어놓은 설정이다. 

/*
    
    React의 장점
    1. component 단위의 개발이 가능하다. 
    2. virtual DOM 개념을 사용한다. 
    3. JSX문법으로 인해 html 작성을 좀더 쉽게 할 수 있다. 
    
*/

// var React = require('react');
import React from 'react'; // react 문법을 사용할 수 있도록 해준다
import ReactDOM from 'react-dom'; // react로 만들 내용을 DOM에 만들어준다. 

// 컴포넌트 가져오기
import App from './App';

// ReactDOM.render(무엇을 그릴까?,어디에 그릴까?)
// With JSX
ReactDOM.render(<App />,document.getElementById('root'));

// Without JSX
//ReactDOM.render(
//    React.createElement('h1',null,'First React App'),
//    document.getElementById('root')
//);