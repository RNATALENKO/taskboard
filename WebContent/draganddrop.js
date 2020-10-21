
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




//add the css classes of opentaskcontainer to the completed list to format the items
completedlist.classList.add("tasklist");
completedlist.classList.add("completedlist");



//loop through drop zone elements
dropzones.forEach(function(dropzone){
	
	//on the dragover event
	dropzone.addEventListener("dragover", function(){
		
		//get dragged element (currently contains dragging class)
		draggedElement = document.querySelector(".dragging");
		console.log("dragged Element: ");
		console.log(draggedElement);
		
		//get the current dropzone unordered list
		var dropzonelist = dropzone.lastElementChild; //causing null
		console.log("list to append: ");
		console.log(dropzonelist);
		
		//append the current dragged element to the list
		dropzonelist.appendChild(draggedElement);

	});
});






//on the drop, we append the element, afterward we remove from tasklist in local storage, then add to completed list in local storage





//functio to load completed list







