/**
 * 
 */

function test(){
	alert("test 1 2 3");
}


//shows hidden long title
function expandTitle(){
	
expandcontainer.addEventListener("click",function(){
		
		currentValue = tc.style.whiteSpace; 
		
		if(currentValue == "nowrap"){
			tc.style.whiteSpace = "pre-wrap";
		}
		else if(currentValue == "pre-wrap"){
			tc.style.whiteSpace = "nowrap";
		}
	});
	
}