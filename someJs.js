window.console.log('js is here');

window.onload = function(){
	
	let initB = document.getElementById("initB");
	let makeB = document.getElementById("makeB");
	let resultS = document.getElementById("resultS");
	let statesA = ["notReady","pending..","pending...","ready","done"];
	
	window.console.log('some vars are statesA:'+statesA+'initB:'+initB+'makeB:'+makeB+'result:'+resultS);
	
	var inx1 = 0;
	inx1 = statesA[inx1]
	window.console.log('No buttons pushed. current state: '+inx1);
	
	function initilizeF (inx1) {
		
		inx1 = 1;
		window.console.log('initilizing started : '+inx1);
		
		nextStep = function () {
			//resultS.p.innerHTML(statesA[inx1]);
			window.console.log(statesA[inx1]+' -_- '+inx1);
			inx1 +=1;
			window.console.log(statesA[inx1]+' -_- '+inx1);
			
		};
		
		do {
			window.console.log('started do loop: '+statesA[inx1]);
				
				setTimeout( function (){nextStep()},2300);
				
				window.console.log('after timeout?: '+inx1);
				
				
				if(inx1==2){
					inx1=3;
					window.console.log(statesA[inx1]);
					//resultS.innerHTML(statesA[inx1]);
				
					return false;
				}
				
				//return inx1;
			
		} while (inx1 <= 2);
				
		
		
		
		window.console.log(statesA[inx1]);
		return inx1;
	};	
	
	
	function makeCoffeeF (statesA) {
		if (inx1==3){
		setTimeout(function(statesA){statesA = "done";},5500);
		window.console.log(statesA);
		return statesA;
		}
	};
	
	initB.addEventListener("click", initilizeF, false);
	initB.addEventListener("click", makeCoffeeF, false);
	return 0;
};	