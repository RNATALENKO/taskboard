
function dragtest(){
	alert("test from drag file...");
}

/**
 * drag and drop operations
 */





//get and display all list items
var listItems = document.getElementById("tasklist");
console.log(listItems);
	
//get all draggable items from the item list
var draggables = listItems.querySelectorAll('[draggable="true"]');
console.log("draggable elements: ");
console.log(draggables);

var draggedElement = null; 
var completedlist = document.getElementById("completedlist");

//get the drop zone

var dropzones = document.querySelectorAll(".dropzone");
console.log("dropzone: ");
console.log(dropzones);

//add the drag start
draggables.forEach(function(draggable){
	
	//on drag start attach draggign class
	draggable.addEventListener("dragstart", function(){
		console.log("drag event started...");
		
		//attach the dragging class
		draggable.classList.add("dragging");
		console.log(draggable);
		
	});
	
	//on drag end remove draggable class
	draggable.addEventListener("dragend", function(){
		
		draggable.classList.remove("dragging");
		
	});
	
});



dropzones.forEach(function(dropzone){
	
	dropzone.addEventListener("dragover", function(){
		
		
		draggedElement = document.querySelector(".dragging");
		console.log("dragged Element: ");
		console.log(draggedElement);
		
		/*errors here*/
		//drop the dragged element and append it to the list
		var dropzonelist = dropzone.lastElementChild; //causing null
		console.log("list to append: ");
		console.log(dropzonelist);
		dropzonelist.appendChild(draggedElement);

	});
});






//on the drop, we append the element, afterward we remove from tasklist in local storage, then add to completed list in local storage





//functio to load completed list







