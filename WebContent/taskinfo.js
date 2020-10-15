/**
 * 
 * need to make the expand container disappear if the title is shorter
 * 
 */

function test(){
	alert("test 1 2 3");
}


//shows hidden long title
function expandTitle(){
	
expandcontainer.addEventListener("click",function(){
	
		currentValue = titleheading.style.whiteSpace; 
		
		if(currentValue == "nowrap"){
			titleheading.style.whiteSpace = "pre-wrap";
		}
		else if(currentValue == "pre-wrap"){
			titleheading.style.whiteSpace = "nowrap";
		}
	});

}