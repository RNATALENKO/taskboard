/**
 * 
 */



//when hover over add button, show the color picker div
function showPicker(){
	
	addcolorbutton.addEventListener("click", function(){
		colorpicker.style.display = "block";
	});
	
	/*
	colorpicker.addEventListener("mouseleave", function(){
		colorpicker.style.display = "none";
	});
	*/
	
}

//when over the colors
//bug when you click on outside element it turns on the border
function selectColors(){

	var isSelected = false; 
	
	//clicking on child li elements only
	colorlist.addEventListener("click", function(element){
		
		//if it's a child element which has no id
		if(element.target.getAttribute("id") == null){
			
			if(isSelected == false){
				
				//turn border for that element on
				element.target.style.boxSizing = "border-box";
				element.target.style.border = "2px solid grey";
				
				isSelected = true; 
			}
			
			if (isSelected == true){
				
				//if the color item has a border turn it off
				var coloritems = colorlist.children;
				for(var x = 0; x < coloritems.length; x++){
					if(coloritems[x].style.border == "2px solid grey"){
						coloritems[x].style.border = "none";
					}
				}
				
				//turn border for next clicked element
				element.target.style.boxSizing = "border-box";
				element.target.style.border = "2px solid grey";
				
			}
		}
		
		//set textbox as same background color as palette item you clicked on
		textbox.style.backgroundColor = element.target.style.backgroundColor; 
		
				
	});
}



//functions to add and remove colors from color palette
//note on refresh colors disappear because they aren't saved. 

function addToColorPalette(){
	
	
	
	//add a color to palette
	function addColor(){
		
		//creates a color item to append to list
		function createColorItem(color){
			
			var listItem = document.createElement("LI");
			listItem.classList.add("item");
			listItem.style.backgroundColor = color; 
			colorlist.appendChild(listItem);
			
		}
		
		//tests to see if value is a valid color hex
		function isValideHex(value){
			 var pattern = /^#[0-9A-F]{6}$/;
			 var results = pattern.test(value);
			 return results; 
		}
		
		addcolortopalettebutton.addEventListener("click", function(){
			
			//if color input is valid, create the color item
			if(colorinput.value.length == 7 && isValidHex(colorinput.value) == true)
				createColorItem(colorinput.value);
			});
	}
	
	//execute
	addColor();
	
}








































