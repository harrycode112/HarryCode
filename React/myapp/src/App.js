import React from 'react';

/*
    컴포넌트는 항상 단일태그로 시작해야 한다. 
    단점 : 불필요한 태그들이 많이 생성된다. 
    JSX 문법 안에는 if, for 등을 사용할 수 없다. 
*/

/*
    IDE툴(Brackets, 서브라임, 아톰, vscode)
    
    자동완성기능(코드) -> snippet -> extension
*/

class App extends React.Component {
    render(){
        
        let text = 'React';
        
        return (
            <div>
                <h1>First {text} App</h1>
                <h2>{text} Project</h2>
            </div>
        )
    }
}

export default App;