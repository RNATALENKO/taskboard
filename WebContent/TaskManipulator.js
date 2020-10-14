/**
 * 
 *  Add tasks operations
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





function createTaskElement(title, date, colorcode, description) {
	
	//Create the elements and add the classes and appropriate text nodes
	var li = document.createElement("LI");
	li.setAttribute("id", "li");
	
	var flexdiv = document.createElement("DIV");
	flexdiv.classList.add("flex");
	flexdiv.setAttribute("id", "flex");
	
	var mainbodydiv = document.createElement("DIV");
	mainbodydiv.classList.add("wrapper");
	mainbodydiv.setAttribute("id", "wrapper");
	
	//add hidden div to wrapper that contains description
	var descriptiondiv = document.createElement("DIV");
	descriptiondiv.appendChild(document.createTextNode(description));
	descriptiondiv.classList.add("hiddendiv");
	descriptiondiv.setAttribute("id", "hiddendiv");
	
	
	var headingdiv = document.createElement("H2");
	headingdiv.classList.add("tasktitle");
	headingdiv.setAttribute("id", "tasktitle");
	
	
	var colorcodespan = document.createElement("SPAN");
	colorcodespan.classList.add("colorcode");
	colorcodespan.style.backgroundColor = colorcode; 
	
	
	
	var datespan = document.createElement("SPAN");
	datespan.appendChild(document.createTextNode(date));
	datespan.classList.add("datespan");
	datespan.setAttribute("id", "date");
	
	
	var headingText = document.createTextNode(title);
	headingdiv.appendChild(headingText);
	
	
	var trashdiv = document.createElement("DIV");
	trashdiv.classList.add("trashwrapper");
	trashdiv.setAttribute("id", "trashwrapper");
	
	
	var trashspan = document.createElement("SPAN");
	trashspan.classList.add("trashicon");
	
	//add the trash icon, text for now
	var trashicontext = document.createTextNode("trash"); //will replace with svg icon
	trashspan.appendChild(trashicontext);
	

	//appending all the created elements to where they belong
	trashdiv.appendChild(trashspan);
	mainbodydiv.appendChild(headingdiv);
	mainbodydiv.appendChild(colorcodespan);
	mainbodydiv.appendChild(datespan);
	mainbodydiv.appendChild(descriptiondiv);
	flexdiv.appendChild(mainbodydiv);
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
		
		//create the task element passing in arguments
		createTaskElement(taskObject["title"], taskObject["date"], JSON.parse(localStorage.getItem("SelectedColor")), taskObject["description"]);
		
		//add to the taskId
		taskId +=1; 
		
		//store task id into local storage
		localStorage.setItem("CurrentTaskID", JSON.stringify(taskId));
		
		
	});
	
}


//loads the color palettes associated with object into the created div element
function loadInPalettes(){
	
	var colorCodeItems = null;
	
	//if list exists in storage:
	if(localStorage.getItem("TaskList")!= null){
		
		//retrieve task list in storage
		taskArray = JSON.parse(localStorage.getItem("TaskList"));
		
		//get html list items, from class name colorcode
		colorCodeItems = document.getElementsByClassName("colorcode");
		
		//loop through task array of objects
		for( var x = 0; x < taskArray.length; x++){
			
			//store current object
			var currentObject = taskArray[x];
			
			//store current color code
			var currentObjectColor = currentObject["colorcode"];
			
			//store current html element
			var currentHtml = colorCodeItems[x];
			
			//set current html elements background color to currentObjectColor
			currentHtml.style.backgroundColor = currentObjectColor; 
			
		}
	}
}

	





/*
 * 
 *   Delete Task Operations
 * 
 */



function deleteTask(){
	
	
		tasklist.addEventListener("click", function(element){
			
		
			//if the trashwrapper is clicked and a list already exists:
			if(element.target.getAttribute("id") == "trashwrapper" && localStorage.getItem("TaskList") != null){
				
				//get clicked element
				var currentElement = element.target; 
				
				
				//get the flex outer element
				var currentFlexDiv = currentElement.parentElement; 
				
				//get the title div
				var titlediv = currentFlexDiv.firstElementChild;
		
				
				//get the title element
				titlecontent = titlediv.firstElementChild.innerHTML; 

				//remove the li item from from view
				tasklist.removeChild(currentElement.parentElement.parentElement);
				
				
				//get the stored list into an array
				var taskArray = JSON.parse(localStorage.getItem("TaskList"));
				
			
				//loop through array and delete a value
				var storedTitle = "";
				var currentObject = null; 
				
				for( var x = 0; x < taskArray.length; x++){
					
					//store current object in array
					currentObject = taskArray[x];
					
					//get current objects title
					storedTitle = currentObject["title"];
					
					//if clicked title matches stored title
					if(titlecontent == storedTitle){
						
						
						//remove the entire object from the task array
						taskArray.splice(x, 1);
						
						
					}
					
					
				}				

				//store the task array back to local storage
				localStorage.setItem("TaskList", JSON.stringify(taskArray));
				
				
				
			}
				
		});
}



/*
 * 
 *  operations for changeing view
 * 
 * 
 */


//need function to load in descriptions from task arrays to the hidden divs
function loadInDescriptions(){
	
	var hiddenDivs = null; 
	var currentObject = null; 
	
	//get the stored descriptions
	if(localStorage.getItem("TaskList")!=null){
		
		//get stored objects
		taskArray = JSON.parse(localStorage.getItem("TaskList"));
		
		//get all the hidden divs
		hiddenDivs = document.getElementsByClassName("hiddendiv");
		
		//loop through lenght of task array
		for(var x = 0; x < taskArray.length; x++){
		
			//store object in current task array index
			currentObject = taskArray[x]; 
			
			//set hidden divs inner html to currentobject's description
			hiddenDivs[x].innerHTML = currentObject["description"];
		}
	}
	
}

/*
 * 
 *   change to expanded view operations
 * 
 */


function changeView(){
	
	
<<<<<<< HEAD
	tasklist.addEventListener("click", function(element){
		
		//if the element clicked has the id wrapper (which is the main body of the task)
		if(element.target.getAttribute("id") == "wrapper"){
			
			
			
			//find the element clicks
			
			
		}
		
	});
	
}
=======
	//click any element on task list
	tasklist.addEventListener("click", function(element){
		
		//run code if element is the wrapper of a task
		if(element.target.getAttribute("id") == "wrapper"){
			
			//get the description of the hidden element div that was clicked
			var descriptionElement = element.target.lastElementChild;
			var descriptionText = descriptionElement.innerHTML;
			
		
			//populate the taskinfo html page with clicked elements
			
			
			
			//change the view to task info page
			location.href  = "http://localhost:8080/TaskBoard/taskinfo.html";
			
			
		};
		
	});
	
	
}


>>>>>>> changeview




