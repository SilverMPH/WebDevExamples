//NOTE: An additional challenge that the teacher mentioned but didn't go through was first to print out if the student is not in the list an second to print out multiple students with the same name. I may have to come back to this later.

var message = '';
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  
  return report
}

while(true) {
  search = prompt("Search the student records: type a name [Jody] (or type 'quit' to end)");
  //NOTE: The "search === null" part of the if statement below is to catch if the user clicks the "Cancel" button on the prompt dialogue. This way the loop will end either way and you won't get an error (because the Cancel button returns Null which is essentially nothing and would not be recognized by the .toLowerCase() method.
  if (search === null || search.toLowerCase() === "quit") {
    break;
  }
  
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if (student.name === search) {
      message += getStudentReport(student);
      //message = getStudentReport(student); **These two lines are how the Teach did it but these don't work in current browsers anymore.
      //print(message);
    }
    
  }
  
}
print(message);

