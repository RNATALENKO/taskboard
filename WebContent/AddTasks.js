/**
 * 
 */



//import failing

var taskArray = [];


//checks to see if list in storage, if it is then load it
function getList(){
	
	if(localStorage.getItem("TaskList") != null){
		taskArray = JSON.parse(localStorage.getItem("TaskList"));
	}
	
}





function createTaskElement(title, date, colorcode) {
	
	//Create the elements and add the classes and appropriate text nodes
	var li = document.createElement("LI");
	
	var flexdiv = document.createElement("DIV");
	flexdiv.classList.add("flex");
	
	var titlediv = document.createElement("DIV");
	titlediv.classList.add("wrapper");
	
	
	var headingdiv = document.createElement("H2");
	headingdiv.classList.add("tasktitle");
	
	
	var colorcodespan = document.createElement("SPAN");
	colorcodespan.classList.add("colorcode");
	colorcodespan.style.backgroundColor = colorcode; 
	
	var datespan = document.createElement("SPAN");
	datespan.appendChild(document.createTextNode(date));
	
	
	var headingText = document.createTextNode(title);
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
	titlediv.appendChild(colorcodespan);
	titlediv.appendChild(datespan);
	flexdiv.appendChild(titlediv);
	flexdiv.appendChild(trashdiv);
	li.appendChild(flexdiv);
	tasklist.appendChild(li);	
}



function addATask(){
	
	addtaskbutton.addEventListener("click", function(){
		
		//date object
		var date = new Date(); 
		
		//capture title, description, date and turn to object
		var taskObject = {
				"title": titleinput.value,
				"description": textbox.value,
				"timestamp": Date.now(),
				"date": date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
		};
		
		//convert object to string, and display, for visual
		alert(JSON.stringify(taskObject,"\t",2));
		
		//push the object into the task array
		taskArray.push(taskObject);
		
		
		//convert taskarray to string and store in local storage
		localStorage.setItem("TaskList", JSON.stringify(taskArray));
		
	
		createTaskElement(taskObject["title"], taskObject["date"]);
		
		
	});
	
}














