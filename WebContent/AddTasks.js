/**
 * 
 */

function test(){
	alert("test 1 2 3");
}


//function that creates a task element
/*bug: when clicking add task, the tasks move downward*/

function createTaskHTML(){
	
	//Create the elements and add the classes and appropriate text nodes
	var li = document.createElement("LI");
	
	var flexdiv = document.createElement("DIV");
	flexdiv.classList.add("flex");
	
	var titlediv = document.createElement("DIV");
	titlediv.classList.add("wrapper");
	
	
	var headingdiv = document.createElement("H2");
	headingdiv.classList.add("tasktitle");

	
	var headingText = document.createTextNode("Title of task");
	headingdiv.appendChild(headingText);
	
	
	var trashdiv = document.createElement("DIV");
	trashdiv.classList.add("trashwrapper");
	
	
	var trashspan = document.createElement("SPAN");
	trashspan.classList.add("trashicon");
	
	//add the trash icon, text for now
	var trashicontext = document.createTextNode("trash"); //will replace with svg icon
	trashspan.appendChild(trashicontext);
	

	//appending all the created elements to where they belong
	trashdiv.appendChild(trashspan);
	titlediv.appendChild(headingdiv);
	flexdiv.appendChild(titlediv);
	flexdiv.appendChild(trashdiv);
	li.appendChild(flexdiv);
	tasklist.appendChild(li);
	
}


class Task{
	
	contructor(title, taskdescription, color){
		
		this.title = title;
		this.taskdescription = taskdescription; 
		this.color = color; 
		
	}
	
}















//adds task element to the list of tasks
function addTask(){
	addtaskbutton.addEventListener("click", function(){
		
		
		
	});
}