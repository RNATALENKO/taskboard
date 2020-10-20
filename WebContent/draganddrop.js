
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

//get the drop zone
var dropzone = document.getElementById("completedlist");
console.log("dropzone: ");
console.log(dropzone);

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





dropzone.addEventListener("dragover", function(){
	
	
	
});


//on the drop, we append the element, afterward we remove from tasklist in local storage, then add to completed list in local storage





