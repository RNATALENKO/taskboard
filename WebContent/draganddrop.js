
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


//empty completed 
var finishedTaskArray = []; 

//function to populate an object
var populateObject = function(draggedElement){
	
	var date = new Date(); 
	
	var taskObject = {
			"title": draggedElement.querySelector("#tasktitle").innerHTML,
			"description": draggedElement.querySelector("#hiddendiv").innerHTML,
			"date": draggedElement.querySelector("#date").innerHTML,
			"colorcode": draggedElement.querySelector("#colorcode").innerHTML,
			"timestamp": date.getTime(),
			"timeformat": draggedElement.querySelector("#timeformat").innerHTML
	};
	
	return taskObject; 
}









function removeFromTaskList(element){
	
	//get element description
	var elementDescription = element.querySelector("#hiddendiv").innerHTML;
	
	//get the task list from storage
	var taskList = JSON.parse(localStorage.getItem("TaskList"));
	
	//find the matching description of the object and remove that object
	for(var x = 0; x < taskList.length; x++){
		
		var currentObject = taskList[x];
		var currentDescription = currentObject["description"];
		
		if(currentDescription == elementDescription){
			taskList.splice(x,1);
		}
		
	}
	
	//save that list back to storage
	localStorage.setItem("TaskList", JSON.stringify(taskList));
	
	
}



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
		
		
	
	//if element doesn't exist 
		//on drag end set the element to finished task, must add if dropzone is finished task, otherwise add to "TaskList" 
		draggedElement = document.querySelector(".dragging");
		var taskObject = populateObject(draggedElement);
		alert(JSON.stringify(taskObject,"\t",2));
		finishedTaskArray.push(taskObject);
		localStorage.setItem("FinishedTaskList", JSON.stringify(finishedTaskArray));
		
		//remove finished task from task list
		removeFromTaskList(draggedElement);
		
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


	
	










//update in other task list





//load tasks at beginning






