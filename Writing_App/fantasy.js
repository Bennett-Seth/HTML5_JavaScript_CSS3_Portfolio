//Top Menu Fuctions
function HamburgerNav() {
	document.getElementsByClassName("hamNav")[0].classList.toggle("responsive");
}

function authorNav() {
	document.getElementsByClassName("authorNav")[0].classList.toggle("responsive");
}

function hideFantasy() {
	document.getElementsByClassName("fantasyMain")[0].classList.toggle("responsive");
}

// Personal Notes Functions

// Fancy TextArea Source: https://stackoverflow.com/questions/15844868/can-i-make-a-textarea-grow-with-text-to-a-max-height

// Saving in Local Storage: https://thejackalofjavascript.com/storing-objects-html5-local-storage/

function clearAll() {
    localStorage.clear()
}

var counter = 0;

function printNote(){
    if (typeof(Storage) !== "undefined") {
    
    // Establish the ID for each note
        function makeCounter() {
            counter += 1;
            return counter;
        }
        var idNum = makeCounter();
        
    // Store my Variables
        var myTitle = document.getElementById("noteTitle").value;
        var myNote = document.getElementById("textArea").value;
        
    // Print this note
        var h3Node = document.createElement("h3");
            h3Node.setAttribute("class", "listH3" );
        var h3Text = document.createTextNode("#" + idNum + " " + document.getElementById("noteTitle").value);
        h3Node.appendChild(h3Text);
            document.getElementById("noteList").appendChild(h3Node);
    
        var pNode = document.createElement("p");
            pNode.setAttribute("class", "listP" );
        var pText = document.createTextNode(document.getElementById("textArea").value);
        pNode.appendChild(pText);
            document.getElementById("noteList").appendChild(pNode);
        }
}
        
// ***Save these notes into the Local Storage
function saveNotes(){
    var titleList = document.getElementsByClassName("listH3");    
    var listH3 = "";
    var x;
      for (x in titleList){
         listH3 += titleList.value[x] + ", "; 
    }   
        
    var titles = "My note titles are: " + listH3;
        
    document.getElementById("test1").innerHTML = titleList;  
        
        //var newNote = {noteId: counter, title: myTitle, contents: myNote }

        //JSONnewNote = JSON.stringify(newNote);
        //localStorage.setItem("newNoteJSON", JSONnewNote);
        //}
    
    // function saveFantasy (){}
    
}

//***Load and Print contents of local storage:
//function loadAll() {
    
//}
        
        //text = localStorage.getItem("newNoteJSON");
        //newNote = JSON.parse(text);
        //document.getElementById("JSONPrint").innerHTML = newNote.noteId;
        
        //} else {
        //alert("Sorry, there's no web storage support on this browser!");
        //    }


//function loadNotes() {}

// Fantasy Story Functions
