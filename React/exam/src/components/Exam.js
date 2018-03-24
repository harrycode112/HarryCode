import React, {Component} from 'react';

// 반복문 -> for
// react 반복 -> 배열

class Exam extends Component {
    
    handleClick(){
        // map, filter -> javascript 내장객체(Array)
        // map -> 기존 배열을 기반으로 새로운 배열을 리턴하는 기능
        // filter -> 기존 배열을 기반으로 조건 필터링 후 새로운 배열을 리턴하는 기능
        
        let a = [ 10, 20, 30 ]; // 기존배열
        
        let b = a.map((v,i)=>{ // v : value, i : index
            console.log(v,i);  
            return v + 10;
        });
        
        let c = a.filter((v,i)=>{
           return v > 10; // filter 는 비교를 해야 한다.
        });
        
        console.log(a);
        console.log(b);
        console.log(c);
    }

    render(){
        
        let number = [ <div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>];
        
        let text = [ 'HTML','CSS','Javascript' ];
        let result = text.map((value,index)=>{
            return (
                <div key={index}>
                    {value}
                </div>
            ) 
        });
        
        return (
            <div>
                {result}
                <button onClick={this.handleClick.bind(this)}>테스트하기</button>
            </div>
        )
    }
}

export default Exam;