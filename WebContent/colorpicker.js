
/*
 * Once you click on a color: clear the input
 */



/*
 * Need to load the palettes from object list to each front end list item
 * 
 * 
 */




//inputs hex color code, outputs rgb array of values
function hexToRgb(hex){
	
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	
	//if something returns to result, parse the results/create object, or return null
	return result ? {
	    r: parseInt(result[1], 16),
	    g: parseInt(result[2], 16),
	    b: parseInt(result[3], 16)
	  } : null;
	
}


//extracts rgb values from a given element
function extractValues(element){
	

	
	//store values after regex, add comma
	var extraction = element.style.backgroundColor.match(/\d+/g).toString() + ",";
	
	//generate and return an array of rgb values [255, 255, 2555,]
	var rgbArray = [];
	var value = "";
	arrayIndexCount = 0;
	
		for(var y = 0; y < extraction.length; y++){
			
			if(extraction[y] != ','){
				value += extraction[y];
			}
			else {
				rgbArray[arrayIndexCount] = value; 
				value = "";
				arrayIndexCount++;
			}
		}
	
	rgbArray += ",";
	
	return rgbArray;
	
}










var colorpalette = [];




//loads palette from local storage, if any
function loadPalette(){
	
	
	if(localStorage.getItem("ColorPalette")!=null){
		
		//store the list into the palette array
		colorpalette = JSON.parse(localStorage.getItem("ColorPalette"));
		
		for(var x = 0; x < colorpalette.length; x++){
			
			createColorItem(colorpalette[x]);
		}
		
		
	}
	
}







//when hover over add button, show the color picker div
function showPicker(){
	
	addcolorbutton.addEventListener("click", function(){
		colorpicker.style.display = "block";
	});
	
	
	colorpicker.addEventListener("mouseleave", function(){
		colorpicker.style.display = "none";
	});
	
}


//deslects color on click outside color palette
function deselect(){
	
	colorpicker.addEventListener("click", function(event){
		
		var isClickInside = colorlist.contains(event.target);
		
		if(!isClickInside && event.target != removecolorbutton && event.target != colorinput && event.target != addcolortopalettebutton){
			
			var children = colorlist.children;
			for (var x = 0; x < children.length; x++){
				children[x].style.border = "none";
			}	
			
			//set list item to null
			localStorage.setItem("SelectedColor", JSON.stringify(null));
			textbox.style.backgroundColor = "#ffffff"; //default text box color;
			
			isSelected = false;
		}
		
	});
	
}



//when over the colors
//bug when you click on outside element it turns on the border
/*
 * need a way when clicked outside of color palette then then turn off selected
 */

var isSelected = false; 

function selectColors(){

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




//creates a color item to append to list
function createColorItem(color){
	
	var listItem = document.createElement("LI");
	listItem.classList.add("item");
	listItem.style.backgroundColor = color; 
	colorlist.appendChild(listItem);
	
}








//functions to add and remove colors from color palette
//note on refresh colors disappear because they aren't saved. 

function addToColorPalette(){
	
	
	//add a color to palette
	function addColor(){
		
		//tests to see if value is a valid color hex
		function isValidHex(value){
			 var pattern = /^#[0-9A-F]{6}$/i; //had to put i to make pattern case insensitive
			 var results = pattern.test(value);
			 return results; 
		}
		
		
		
		
		//function that checks if a color exists, if it does, do not create color item
		function colorExists(hex){
			
			var rgbValues = Object.values(hexToRgb(hex)) + ",";
			
			//get children
			var children = colorlist.children;
			
			for(var x = 0; x < children.length; x++){
				
				if(extractValues(children[x]) == rgbValues){
					return true; 
				}
				
				
			}
			
			return false;
			
		}
		
		
		
		//on click add to color, and add to array
		addcolortopalettebutton.addEventListener("click", function(){
			
			//if color input has length of 7 chars and is a valid hex pattern, create color item in pallette
			if(colorinput.value.length == 7 && isValidHex(colorinput.value) && !colorExists(colorinput.value) ){
				
				
				createColorItem(colorinput.value);
				colorpalette.push(colorinput.value);
				localStorage.setItem("ColorPalette", JSON.stringify(colorpalette));
				
				
				
			}
		});
	}
	
	//execute
	addColor();	
}



//function that will remove a color from a color palette
//this will only work with whatever's in the color input
function removeColorFromStorage(){
	
	
	//remove colors in ColorPalette list, so that loadPalettes will update upon refresh
	var currentPalette = JSON.parse(localStorage.getItem("ColorPalette"));
	
	//filters out the matching palette to input value
	updatedPalette = currentPalette.filter(function(color){
		return color != colorinput.value;
	})
	
	//store back to local storage
	localStorage.setItem("ColorPalette", JSON.stringify(updatedPalette));
	
	//update current array
	colorpalette = updatedPalette; 
	
	
}




//testing color #1174bf
//function that will remove colors
//will need to remove from storage as well
function removeColorFromPalette(){
	
	
	removecolorbutton.addEventListener("click", function(){
		
		
		//if there's a selected color
		if(isSelected == true){
			
			//get the children
			var children = colorlist.children;
			var selectedChild = null;
			
			
			
			
			//remove highlighted child
			for (var x = 0; x < children.length; x++){
				if(children[x].style.border == "2px solid grey"){
					selectedChild = children[x];
					colorlist.removeChild(children[x]);
				}
			}	
			
			
			
			/* remove from local storage*/
			var colorPalettes = JSON.parse(localStorage.getItem("ColorPalette")); //get string array convert to object
			
			var selectedRgb = extractValues(selectedChild); //array of rgb values of selected child
					
			//remove the stored rgb value from color palettes array, store again
				
			colorPalettes = colorPalettes.filter(function(color){
					
				var storedRgbValue = Object.values(hexToRgb(color)) + ","; 
				
				if(storedRgbValue != selectedRgb){
					return color; 
				}
				
			});
					//store updated color palettes after removal.
					localStorage.setItem("ColorPalette", JSON.stringify(colorPalettes));
			
		}
		
		//if no selected color
		else {
			
			//get rgb values from hex inside input 
			var inputRgb = Object.values(hexToRgb(colorinput.value)) + ","; 
			
			
			//get all colors in palette and convert to array of elements
			var allColors = colorlist.children;
			
			
			
			removeColorFromStorage();
			
			
			//loop through color list items, if there's a matching rgb value remove it from colorlist
			for(var x = 0; allColors.length; x++){
				
				var colorListRgb = extractValues(allColors[x]);
				
				if(colorListRgb == inputRgb){
					colorlist.removeChild(allColors[x]);
					
				}
				
			}
				
		}
		
	});
	
	
}




































