/**
 * 
 */






var taskArray = [];


//checks to see if list in storage, if it is then load it
function loadList(){
	
	
	
	//if there is a list
	if(localStorage.getItem("TaskList") != null){
		
		//get list and store in the task array
		taskArray = JSON.parse(localStorage.getItem("TaskList"));
		
		
		// create all the elements of that list, but we start from end, to populate most recent
		for (var x = taskArray.length-1; x >= 0 ; x--){
			
			var currentObject = taskArray[x];
			
			createTaskElement(currentObject["title"], currentObject["date"]);
		}
			
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
	var color = JSON.parse(localStorage.getItem("SelectedColor"));
	colorcodespan.style.backgroundColor = color; 
	
	
	
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
	tasklist.prepend(li); //will append node as first child to place most recent task ahead of others
}



function addATask(){
	
	addtaskbutton.addEventListener("click", function(){
		
		//date object
		var date = new Date(); 
		alert(date.getMonth() + "/"+  date.getDate() +  "/"+ date.getFullYear());
		
		//capture title, description, date and turn to object
		var taskObject = {
				"title": titleinput.value,
				"description": textbox.value,
				"timestamp": Date.now(),
				"date": date.getMonth() +1 + "/" + date.getDate() + "/" + date.getFullYear()
		};
		
		//convert object to string, and display, for visual
		alert(JSON.stringify(taskObject,"\t",2));
		
		//use unshift to add the most recent item to beginning of array
		taskArray.unshift(taskObject);
		
		
		//convert taskarray to string and store in local storage
		localStorage.setItem("TaskList", JSON.stringify(taskArray));
		
	
		createTaskElement(taskObject["title"], taskObject["date"], localStorage.getItem("SelectedColor"));
		
		
	});
	
}
















