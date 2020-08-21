/**
 * 
 */


//when hover over add button, show the color picker div
function showPicker(){
	
	addcolorbutton.addEventListener("click", function(){
		colorpicker.style.display = "block";
	});
	
}

//when over the colors
//bug when you click on outside element it turns on the border
function selectColors(){
	
	var isSelected = "none";
	var selectedElement; 
	
	colorlist.addEventListener("click", function(element){
		
		//change textbox style (just to test)
		textbox.style.backgroundColor = element.target.style.backgroundColor;
		
		//if child element (no id) then turn on border
		if(element.target.getAttribute("id") == null){
			
			if(isSelected == "none"){
			
				//turn on border
				element.target.style.boxSizing = "border-box";
				element.target.style.border ="2.5px solid black";
				
				selectedElement = element; 
				isSelected="selected";	
			}	
			
			else if(isSelected =="selected"){
		
				//switch the border on to the targeted elemnet
				element.target.style.boxSizing = "border-box";
				element.target.style.border ="2.5px solid black";
					
				//turn the rest off
				var children = colorlist.children;
				
				for(var x = 0; x < children.length; x++){
					
						if(children[x].firstElementChild.style.backgroundColor != element.target.style.backgroundColor){
							children[x].firstElementChild.style.border = "none";
						}	
				}
	
			}	
		}	
		
		
		//add the hover out listener
		colorpicker.addEventListener("mouseleave", function(){
			colorpicker.style.display = "none";
		});
		
		//return selected element color code to add to the task
		//alert(element.target.style.backgroundColor);
		console.log("selected color: " + element.target.style.backgroundColor);
		
		
		
	});
}

