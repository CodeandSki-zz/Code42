

//ASYNC FUNCTION
// function UserAction(userArray) {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
// 	    if (this.readyState == 4 && this.status == 200) {
// 	    	console.log(xhttp.status, xhttp.statusText, "This is the server status"); 
//     		// const response = JSON.stringify(xhttp.responseText);
//     		// console.log(response, "This is the server response");
//     		console.log(xhttp.responseText);
//     		userArray = JSON.parse(xhttp.responseText);
//     		console.log(userArray, "this is the global variable object");
//     		console.log(userArray[0], 'this is the first object');



// 	    }
//   	};
//     xhttp.open("GET", "https://api.github.com/orgs/code42/members", true);
//     xhttp.setRequestHeader("Content-type", "application/json", );
   	
//     xhttp.send();
    
//     // alert('it worked');
// }


//SYNCRONOUS FUCTION
function UserAction() {
    const xhttp = new XMLHttpRequest();
   	xhttp.open("GET", "https://api.github.com/orgs/code42/members", false);
    xhttp.setRequestHeader("Content-type", "application/json", );
   	xhttp.send();
    console.log(xhttp.status, xhttp.statusText, "This is the server status"); 
	console.log(xhttp.responseText);
	const userArray = JSON.parse(xhttp.responseText);
	console.log(userArray, "this is the global variable object");
	console.log(userArray[0], 'this is the first object');
    return(userArray);
}


export default UserAction;

 

 

