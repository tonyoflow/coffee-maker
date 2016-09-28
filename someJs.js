window.console.log('js is here');

window.onload = function(){
	
	let initB = document.getElementById("initB");
	let makeB = document.getElementById("makeB");
	let resultS = document.getElementById("resultS");
	let statesA = ["notReady","pending..","pending...","ready!","done!"];
	
	window.console.log('some vars are statesA:'+statesA+'initB:'+initB+'makeB:'+makeB+'result:'+resultS);
	
	var inx1 = 0;
	var inx2 =0;
	inx2 = statesA[inx1];

	window.console.log("No buttons pushed. inx1 ="+inx1+" and inx2 = "+inx2);
	
	function updateDisplayF(){
		
		let disp = document.getElementById("resultDiv")
		inx2 = statesA[inx1];
		disp = inx2;
		window.console.log("update display runs. inx1 ="+inx1+" and inx2 = "+disp);
	};
	
	function initilizeF () {
		
		inx1+=1;
		updateDisplayF();
		
		for (i=0; i<2; i++) {
			setTimeout(function(){inx1+=1;updateDisplayF();},5500);
			
			
		};
		
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
	//inx1.addListener("onchange",updateDispayF, false);
	return 0;
};	