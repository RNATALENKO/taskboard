/**
 * On the click of a task trash area, we locate the task inside of the
 */



//get the task list if there is one currently in local storage
var taskArray = []

function retrieveTaskList(){
	
	//if task list exists, store in array
	if(localStorage.getItem("TaskList") != null){
		taskArray = JSON.parse(localStorage.getItem("TaskList"));
	}
	
}


