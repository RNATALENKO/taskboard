/**
 * 
 */




//function that converts an rgb value to a hex code
function valueToHex(value){
	
	var hex = Number(value).stoString(16);
	if(hex.length <2){
		hex = "0" + hex; 
	}
	return hex; 
	
}

//function that returns a full hex value
function fullHex(r,g,b){
	
	return valueToHex(r) + valueToHex(g) + valueToHex(b);
}





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
/*
 * need a way when clicked outside of color palette then then turn off selected
 */
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
				
				//store selected color local
				localStorage.setItem("SelectedColor", JSON.stringify(element.target.style.backgroundColor));
				
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
		function isValidHex(value){
			 var pattern = /^#[0-9A-F]{6}$/i; //had to put i to make pattern case insensitive
			 var results = pattern.test(value);
			 return results; 
		}
		
		addcolortopalettebutton.addEventListener("click", function(){
			
			//if color input has length of 7 chars and is a valid hex pattern, create color item in pallette
			if(colorinput.value.length == 7 && isValidHex(colorinput.value)){
				
				createColorItem(colorinput.value);
			}
		});
	}
	
	//execute
	addColor();	
}




//function that will remove colors
function removeColorFromPalette(){
	
	
	removecolorbutton.addEventListener("click", function(){
		
		//store selected item
		selectedItem = null;
		
		var colorItems = colorlist.children;
		var colorArray = Array.from(colorItems);
		
		//store selected item
		for(var x = 0; x < colorArray.length; x++){
			if(colorArray[x].style.border == "2px solid grey"){
				selectedItem = colorArray[x];
			}
		}
		

		//if there is a highligted element remove it
		if(selectedItem != null){
			
			colorlist.removeChild(selectedItem);
				
		}
		else{
			
			//otherwise remove colors of whatever colorinput.value is
			
			colorArray.forEach(function(element){
				
				
				
				/* NEED HEX/RGB CONVERSION
				if(colorinput.value == element.style.backgroundColor){
					colorlist.removeChild(element);
				}
				*/
				
			});
			
		}
		
	
		
	});
	
	
}




































