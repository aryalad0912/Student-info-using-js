window.addEventListener("load",addListener);

function addListener(){
	document.getElementById("messageBtn").addEventListener("click",myFirst);
	}
function myFirst(){
	var studentName;
	var studentRoll;
	var studentClass;
	studentName = document.getElementById("name").value;
	studentRoll = document.getElementById("rollno").value;
	studentClass = document.getElementById("class").value;
	

	document.getElementById("second").innerHTML ="The name of the student is " +studentName+ " and her/his roll number is " +studentRoll+ 
        " and is in class  " +studentClass+ "<span>"; 
	}
