//NOTE: Unfortunately I was not able to make my idea work. For the sake of time I am going to save this and go to the Teaachers solution video to find out how he makes it work.

var message = '';
var student;
var index;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function printStudentInfo( i ) {
  student = students[i];
  tempMessage = '<h2>Student: ' + student.name + '</h2>';
  tempMessage += '<p>Track: ' + student.track + '</p>';
  tempMessage += '<p>Points: ' + student.points + '</p>';
  tempMessage += '<p>Achievements: ' + student.achievements + '</p>';
  
  return tempMessage;
}

function searchForStudent() {
  while(true) {
    search = prompt("Search for a student in our list. Type 'quit' to exit.");
    if (search === "quit") {
      message += "<br /><br />You have quit the search."; 
      break;
    }
    //NOTE: The indexOf method looks through the array to find if the passed value is there. If it is it will return the index of the item, otherwise it returns -1.
    else if ( students.indexOf(search).name > -1 ) {
      //index = students.indexOf(search).name;
      index = "test";
      //message += printStudentInfo( index );
      message += index;
    }
  }
  print( message );
}

searchForStudent();
