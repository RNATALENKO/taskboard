/*
 * 
 *   change to expanded view operations
 * 
 */


var taskArray = [];
var clickedElement = null;

//gets the task list as an object from local storage
//key: TaskList
var getList = function(key){
	
	return JSON.parse(localStorage.getItem(key));
	
}


function changeView(){
	
		//click any element in task list
		tasklist.addEventListener("click", function(element){
		
			//if element clicked is wrapper
			if(element.target.getAttribute("id") == "wrapper"){
				
				
				//get the description of the hidden element div that was clicked
				var descriptionElement = element.target.lastElementChild;
				var descriptionText = descriptionElement.innerHTML;
				
				
				//display description
				//alert("description of clicked element: " + descriptionText);
				
			
				//get the stored list
				taskArray = getList("TaskList");
				
				//store the matching/clicked object
				var currentObject = null;
				for(var x = 0; x< taskArray.length; x++){
					
					currentObject = taskArray[x];
					
					//alert("task " + x + " description: " +  currentObject["description"]);
					
					if(currentObject["description"] == descriptionText){
						clickedElement = currentObject;
					}	
				}
				
				
				//store the clicked element in local storage
				localStorage.setItem("clickedElement", JSON.stringify(clickedElement));
				
				//change the view to task info page
				location.href  = "http://localhost:8080/TaskBoard/taskinfo.html";
				
	
			}
		
	});
}

function changeInfo(){
	
	//retrieve clicked element
	var clickedItem = getList("clickedElement");

	//set clickedItem properties to the view
	titleheading.innerHTML = clickedItem["title"];
	descriptioncontainer.innerHTML =clickedItem["description"];
	timeformat.innerHTML = clickedItem["timeformat"];
	datecontainer.innerHTML = clickedItem["date"];
	colorcodecontainer.style.backgroundColor = clickedItem["colorcode"];
	

}
