/**
 * 
 * 
 * current bug fix: Need to load color palette into the html li elements, upon refresh, they disappear
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
	tasklist.prepend(li); //will append node as first child to place most recent task ahead of others
}



function addATask(){
	
	var taskId = 0; 
	
	if(localStorage.getItem("CurrentTaskID")!= null){
		taskId = parseInt(localStorage.getItem("CurrentTaskID"));
	}
	else{
		taskId = 0; 
	}

	
	
	addtaskbutton.addEventListener("click", function(){
		
		//date object
		var date = new Date(); 
		alert(date.getMonth() + "/"+  date.getDate() +  "/"+ date.getFullYear());
		
		//capture title, description, date and turn to object
		var taskObject = {
				"title": titleinput.value,
				"description": textbox.value,
				"taskId": taskId,
				"date": date.getMonth() +1 + "/" + date.getDate() + "/" + date.getFullYear(),
				"colorcode": JSON.parse(localStorage.getItem("SelectedColor"))
		};
		
		//convert object to string, and display, for visual
		alert(JSON.stringify(taskObject,"\t",2));
		
		//use unshift to add the most recent item to beginning of array
		taskArray.unshift(taskObject);
		
		
		//convert taskarray to string and store in local storage
		localStorage.setItem("TaskList", JSON.stringify(taskArray));
		
	
		createTaskElement(taskObject["title"], taskObject["date"], JSON.parse(localStorage.getItem("SelectedColor")));
		
		taskId +=1; 
		
		//store task id into
		localStorage.setItem("CurrentTaskID", JSON.stringify(taskId));
		
		
	});
	
}


//loads the color palettes associated with object into the created div element
function loadInPalettes(){
	
	//if task list exists
	if(localStorage.getItem("TaskList")!= null){
		
		//retrieve task list
		taskArray = JSON.parse(localStorage.getItem("TaskList"));
		
		//get all span elements with class name color code
		var spanElements = document.getElementsByClassName("colorcode");
		
		
		//see if span elements not null
		alert(spanElements);
	
	
		//loop through taskArray
		for(var x = 0; x < taskArray.length; x++){
			
			currentObject = taskArray[x];
			
			//retrieve objects colorcode
			var currentPalette = currentObject["colorcode"];
			
			
			
			//display current rgb color code
			
			
			
			
			//get all list elements and update their colors 
			var listItems = tasklist.children;
			
			
			
			
			//get current list item
			var currentListItem = listItems[x];
			
		
			
			
			//need to inject the colorcodes from task array into the list item color code element
			
			
			
		}
			
	
	}
	
	
}

	
















