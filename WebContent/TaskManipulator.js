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





function createTaskElement(title, date, colorcode) {
	
	//Create the elements and add the classes and appropriate text nodes
	var li = document.createElement("LI");
	li.setAttribute("id", "li");
	
	var flexdiv = document.createElement("DIV");
	flexdiv.classList.add("flex");
	flexdiv.setAttribute("id", "flex");
	
	var titlediv = document.createElement("DIV");
	titlediv.classList.add("wrapper");
	titlediv.setAttribute("id", "wrapper");
	
	
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
		
		
		
		//create the task element passing in arguments
		createTaskElement(taskObject["title"], taskObject["date"], JSON.parse(localStorage.getItem("SelectedColor")));
		
		//add to the taskId
		taskId +=1; 
		
		//store task id into local storage
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

	





/*
 * 
 *   Delete Tasks Operations
 * 
 */



function deleteTask(){
	
	
		tasklist.addEventListener("click", function(element){
			
			
			
			
			if(element.target.getAttribute("id") == "trashwrapper" && localStorage.getItem("TaskList") != null){
				
				//current element
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
				var updatedTaskArray = [];
				
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
			
			
				//show updated task array
				alert(updatedTaskArray.toString());
				

				//store the task array back to local storage
				localStorage.setItem("TaskList", JSON.stringify(taskArray));
				
				
				
				
				//subtract one from current task id and store back into local storage
				
				
				
				
				
			}
				
		});
	
}












