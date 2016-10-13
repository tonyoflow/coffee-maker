window.console.log('js is here');

window.onload = function(){
	
	let initB = document.getElementById("initB");
	let makeB = document.getElementById("makeB");
	let resultS = document.getElementById("resultS");
	let statesA = ["Not Ready","pending..","pending...","Ready!","Done!","!3rr0r"];
	
	window.console.log('some vars are statesA:'+statesA+'initB:'+initB+'makeB:'+makeB+'result:'+resultS);
	
	var inx1 = 0;
	var inx2 = 0;
	inx2 = statesA[inx1];

	window.console.log("No buttons pushed. inx1 ="+inx1+" and inx2 = "+inx2);
	
	//defines the function that updates the status display
	function updateDisplayF(){
		
		inx2 = statesA[inx1];
		document.getElementById("resultS").innerHTML = inx2;
		
		
		window.console.log("update display runs. inx1 ="+inx1+" and inx2 = "+inx2);
	};
	//defines what happens when pressing Initilize button
	function initilizeF () {
		
		//update to know sht is going down
		inx1=1;
		updateDisplayF();
		
		//cycletrough yet non existent checkposts
		for (i=0; i<2; i++) {
			
			//delay for the illusion of heavy program lol
			setTimeout(function(){inx1+=1;updateDisplayF();},2500);
			
			
		};
		
	};	
	//defines what happens when pressing Make button
	function makeCoffeeF () {
		
		//check if ready else: errors everywhere
		if (inx1 = 3) {
			
			function pending1(){
				inx1=1;
				updateDisplayF();
			};
			function pending2(){
				inx1=2;
				updateDisplayF();
			};
			function ready1(){
				inx1=4;
				updateDisplayF();
				};
				
			setTimeout(pending1,500);
			setTimeout(pending2,1500);
			setTimeout(pending1,2500);
			setTimeout(ready1,3500);
			
		}
		else if(inx1 != 3) {
			inx1 = 5;
			updateDisplayF();
			
		}
		else {
			//window.alert('no! don\'t press this! the function is yet under construction!');
			window.log('wtf happened? o_O');
			
		inx1 = 5;
		updateDisplayF();
			
		};
		
	};
	
	
	updateDisplayF();
	initB.addEventListener("click", initilizeF, false);
	makeB.addEventListener("click", makeCoffeeF, false);
	//inx1.addListener("onchange",updateDispayF, false);
	return 0;
};	