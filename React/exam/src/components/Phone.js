import React, {Component} from 'react';
import Item from './Item';

class Phone extends Component {

    constructor(){
        super();
        
        this.state = {
            phoneNumber : [
                { name : '원빈', phone : '010-1111-2222' },
                { name : '정우성', phone : '010-2222-3333' },
                { name : '강동원', phone : '010-3333-4444' },
                { name : '박보검', phone : '010-4444-5555' },
            ]
        }
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){

        // concat -> 배열과 배열을 합쳐주는 기능을 가지고 있다. 
//        var a = [10, 20];
//        var b = [20, 40, 60];
//        console.log(a.concat(b));
        
        var c = this.state.phoneNumber.concat([{name : this.aa.value, phone : this.bb.value}]);
        
        console.log(this.aa.value);
        
        this.setState({ phoneNumber : c }); 
    }
    
    render(){
        
        const { phoneNumber } = this.state;
        
        return (
            <div>
                <h1>전화번호부</h1>
                <ul>
                    {
                        phoneNumber.map((value,index)=>{
                            return (
                                <Item key={index} name={value.name} phone={value.phone}/>
                            )
                        })
                    }
                </ul>
                <input ref={ref => this.aa = ref} type="text" />
                <input ref={ref => this.bb = ref} type="text" />
                <button onClick={this.handleClick}>등록</button>
            </div>
        )
    }
}

export default Phone;