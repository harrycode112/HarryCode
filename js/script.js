// 디자인패턴
// GIT

/*
	
	모듈패턴
	싱글톤패턴
	프로토타입패턴
	
*/

// 디자인패턴

/*
	유지보수, 구조화 되어진 코드
	협업
	재사용
*/

// 모듈패턴
// public(개방)과 private(보호)의 공간을 분리하기 위해서 사용한다. 

var module = (function(){
	
	// private
	var data = 10; 
	var test = function(){
		console.log(data);
	}
	
	return {
		// public
		number : 10,
		getData : function(){
			return data;
		},
		setData : function(){
			data += 10;
		},
		testFunc : function(){
			test();
		}
	}
})() // 자체 호출

module.setData();
console.log(module.getData());
module.testFunc();

// var a = module();

// ================================================= 

// 싱글톤 패턴
// 오직 하나의 객체만을 가지고 있다. 
// 대표적인 예) 리터널 객체

var single = (function(){
	
	var instance;
	var data = 10;
	
	function init(){
		return{
			number : 10,
				
		}
	}
	return { 
		getInstance : function(){
			if(!instance){
				instance = init();
			}
			return instance;
		}
	}
})()

var a = single.getInstance;
var b = single.getInstance; 

console.log(a === b);

// ===================================

// 프로토타입 디자인패턴 ( 생성자 )

var pro = function(){
	this.number = 10; 
}
//pro.prototype = {
//	getNumber : function(){
//		
//	},
//	setNumber : function(){
//		
//	}
//}
pro.prototype = (function(){
	var getNumber = function(){
		console.log('a');
	};
	var setNumber = function(){
		
	};
	return {
		get : getNumber,
	}
})()
var c = new pro;
var d = new pro;

//console.log(c===d) // false (서로 공유하지 않는다)
console.log(c.number);
c.get();