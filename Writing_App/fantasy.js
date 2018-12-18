//Top Menu Fuctions
function HamburgerNav() {
	document.getElementsByClassName("hamNav")[0].classList.toggle("responsive");
}

function authorNav() {
	document.getElementsByClassName("authorNav")[0].classList.toggle("responsive");
}

//onload Functions
function displayTitle() {
    // This function is needed for onload purposes, not the user interface.
    var objTitle;
    
    text = localStorage.getItem("TitleJSON");
        objTitle = JSON.parse(text);
    
    if (objTitle == null) {
        document.getElementById("displayTitle").innerHTML = "Build Your World";  
        } else {
    //Loading Object:
        text = localStorage.getItem("TitleJSON");
        objTitle = JSON.parse(text);
       document.getElementById("displayTitle").innerHTML = objTitle.title + ": Summary";        
        }   
}

function displayChar() {
    // This function is needed for onload purposes, not the user interface.
    
    var charName;
    
    //Load Character Name
    text = localStorage.getItem("charNameJSON");
        charName = JSON.parse(text);
    
    if (charName == null) {
        document.getElementById("sumName").innerHTML = "";  
        } else {
    
    // Load Character Objects
    text = localStorage.getItem("charNameJSON");
        charName = JSON.parse(text);
    
    text = localStorage.getItem("appearanceJSON");
        appearance = JSON.parse(text);
    
    text = localStorage.getItem("personalityJSON");
        personality = JSON.parse(text);
    
    text = localStorage.getItem("backgroundJSON");
        background = JSON.parse(text);
    
    // Display Character Objects
    document.getElementById("postName").innerHTML = "Name: " + charName.name;
    
    document.getElementById("sumIntro").innerHTML = "Your story thus far...";
            
    document.getElementById("sumName").innerHTML = "Main Character: " + charName.name;
        
    //document.getElementById("charIntro").innerHTML = charName.fullIntro();
    
    // Display Appearance
  
    document.getElementById("postEye").innerHTML = "Eye Color: " + appearance.eyeColor;
    
    document.getElementById("postHair").innerHTML = "Hair Color: " + appearance.hairColor;
     
    document.getElementById("postGen").innerHTML = "Gender: " + appearance.gender;
     
    document.getElementById("postEth").innerHTML = "Ethnicity: " +appearance.ethnicity;
    
    document.getElementById("postRace").innerHTML = "Race: " + appearance.race;
    
    document.getElementById("postBuild").innerHTML = "Build: " + appearance.build;
    
    document.getElementById("postFeat").innerHTML = "Features: " + appearance.features;

    // Display Personality
    document.getElementById("postWant").innerHTML = "Wants: " + personality.charWant;
    
        
    document.getElementById("postFear").innerHTML = "Fears: " + personality.charFear;
    
    // Display Background
    
    document.getElementById("postChild").innerHTML = "Childhood: " + background.charChild;
    
    document.getElementById("postAdol").innerHTML = "Childhood: " + background.charAdol;
    
    document.getElementById("postAdult").innerHTML = "Childhood: " + background.charAdult;
 }
}

function displayOrg() {
    // This function is needed for onload purposes, not the user interface.
    
    var org;
    
    // Load Org
    text = localStorage.getItem("orgJSON");
        org = JSON.parse(text);
    
    if (org == null) {
        document.getElementById("sumOrg").innerHTML = "";
    } else {
    
    // Display Org
        
    document.getElementById("sumOrg").innerHTML = "Organization: " + org.name;
        
    document.getElementById("orgName").innerHTML = "Name: " + org.name;
    
    document.getElementById("orgBg").innerHTML = "Background: " + org.background;
        
    document.getElementById("orgMotiv").innerHTML = "Motivation: " + org.motivation;
        
    document.getElementById("orgGoal").innerHTML = "Goal: " + org.goal; 
        
    document.getElementById("orgRule").innerHTML = "Rules for Entry: " + org.rulesForEntry; 
        
    document.getElementById("orgFire").innerHTML = "Consequences for Departure: " + org.ConsequencesForDeparture; 
        
    document.getElementById("orgLead").innerHTML = "Leadership Structure: " + org.LeadershipStructure; 

}   
}

function displayMag(){
    // This function is needed for onload purposes, not the user interface.
    var mag;
    
    // Load Mag
    text = localStorage.getItem("magJSON");
        mag = JSON.parse(text);
    
    if (mag == null) {
        document.getElementById("sumMag").innerHTML = " ";  
    } else {
    
    // Display Mag
        
    document.getElementById("sumMag").innerHTML = "Magic: " + mag.name;
        
    document.getElementById("magName").innerHTML = "Name: " + mag.name;
    
    document.getElementById("postOver").innerHTML = "Overview: " + mag.overview;
        
    document.getElementById("postCap").innerHTML = "Capabilities: " + mag.capabilities;
        
    document.getElementById("postLim").innerHTML = "Limitations: " + mag.limitations; 
        
    document.getElementById("postCost").innerHTML = "Costs of Use: " + mag.costOfUse; 
        
    document.getElementById("postWeak").innerHTML = "Weakness: " + mag.weaknesses;    
    }
}

function displayGeo(){
    // This function is needed for onload purposes, not the user interface.
    var geo;
    
    //Load Geo
    text = localStorage.getItem("geoJSON");
       geo = JSON.parse(text);
    
    if (geo == null) {
        document.getElementById("sumGeo").innerHTML = "";
    } else {
    
    // Display Org
        
    document.getElementById("sumGeo").innerHTML = "Cities: " + geo.cities;
        
    document.getElementById("postCit").innerHTML = "Cities: " + geo.cities;
    
    document.getElementById("postRiv").innerHTML = "Rivers: " + geo.rivers;
        
    document.getElementById("postLand").innerHTML = "Landmarks: " + geo.landmarks;
        
    document.getElementById("postMount").innerHTML = "Mountains: " + geo.mountains; 
        
    document.getElementById("postDes").innerHTML = "Deserts: " + geo.deserts;   
    
}
}

var counter = 0;

function displayNotes(){
    // This function is needed for onload purposes, not the user interface.
    
    var allNotes;
    
    //Load Notes
    text = localStorage.getItem("notesJSON");
       allNotes = JSON.parse(text);
    
    if (allNotes == null) {
     document.getElementById("noteList").innerHTML = "";
        } else {
    
    // Establish an ID for each note
    function makeCounter() {
        counter += 1;
        return counter;		
        }

    var idNum = makeCounter();        
            
    // Display Note Content
            
        // First, wipe the current contents
            document.getElementById("noteList").innerHTML = "";
        
        // Second, print a new list of notes
        var i;
            for (i = 0; i < allNotes.length; i++) {
                var pNode = document.createElement("p");
                    pNode.setAttribute("class", "listP" );
                    pNode.setAttribute("id", idNum );
                var pText = document.createTextNode(allNotes[i]);   
                    pNode.appendChild(pText);
                document.getElementById("noteList").appendChild(pNode);
                }     
         
            }
}

function introUser(){
    var greeting;
    var time = new Date().getHours();
    if (time < 5) {
        greeting = "You are quite the trooper to be up so early to write. Let's get started!";
    } else if (time < 6) {
        greeting = "Rise and Shine, my fellow writer. Let's flesh out your new world.";
    } else if (time < 9) {
        greeting = "Time for breakfast, and then we'll write. Can't be creative on an empty stomach!";
    } else if (time < 12) {
        greeting = "Time for lunch, and then we'll write. Can't be creative on an empty stomach!";
    } else if (time < 17) {
        greeting = "Time for Dinner, and then we'll write. Can't be creative on an empty stomach!";
    } else if (time < 21) {
        greeting = "Before you go to sleep, let's write a few more paragraphs.";
    } else {
        greeting = "Let's do some world building, but then you really should get some sleep.";
        }
    document.getElementById("intro").innerHTML = "Welcome to the world buliding app. " + "<br>" + greeting;
}

// Hiding Menu Functions

function hideMain() {
	
    document.getElementsByClassName("fantasyMain")[0].classList.toggle("responsive");
    
    var element = document.getElementById("titleImg");
    element.classList.toggle("spin");
}

function hideChar() {
	document.getElementsByClassName("fantasyChar")[0].classList.toggle("responsive");
    
    var element = document.getElementById("charImg");
    element.classList.toggle("spin");
}

function hideOrg() {
	document.getElementsByClassName("fantasyOrg")[0].classList.toggle("responsive");
    
    var element = document.getElementById("orgImg");
    element.classList.toggle("spin");
}

function hideMag() {
	document.getElementsByClassName("fantasyMag")[0].classList.toggle("responsive");
    
    var element = document.getElementById("magImg");
    element.classList.toggle("spin");
}

function hideGeo() {
	document.getElementsByClassName("fantasyGeo")[0].classList.toggle("responsive");
    
    var element = document.getElementById("geoImg");
    element.classList.toggle("spin");
}

function hideNotes() {
	document.getElementsByClassName("notes")[0].classList.toggle("responsive");
    
    var element = document.getElementById("notesImg");
    element.classList.toggle("spin");
}

function hideEntries() {
    document.getElementsByClassName("noteList")[0].classList.toggle("responsive");
			
    var element = document.getElementById("notesBot");
    element.classList.toggle("noteTrans");	
}

function hideAnime(){
    document.getElementsByClassName("research")[0].classList.toggle("responsive");
    
    var element = document.getElementById("animeImg");
    element.classList.toggle("spin");
}

// Input Functions

function focusBg(x) {
    x.style.background = "yellow";
}

function blurBg(x) {
    x.style.background = "cornflowerblue";
}

// Fantasy Menu Functions

function addTitle() {
        
    //Create Title Object
        var title = "title";
        var myTitle = document.getElementById("storyTitle").value;
        var objTitle = {title: myTitle };    
        
    //Saving Object:
        JSONTitle = JSON.stringify(objTitle);
        localStorage.setItem("TitleJSON", JSONTitle);
    
    //Loading Object:
        text = localStorage.getItem("TitleJSON");
        objTitle = JSON.parse(text);
       document.getElementById("displayTitle").innerHTML = objTitle.title + ": Summary";
    
    // Slide Button
     var element = document.getElementById("titleSub");
    element.classList.toggle("slideButton");
    document.getElementById("titleSub").style.fontFamily = '"Georgia", serif';
    
 }

function delTitle() {
    localStorage.removeItem("TitleJSON");
    
    // Slide Button
     var element = document.getElementById("titleDel");
    element.classList.toggle("slideDelButton");
}

function addChar() {
    //Character Variables
    var name = "name"
        var getName = document.getElementById("charName").value;
    var eyeColor = "eyeColor";
        var getEye = document.getElementById("charEye").value;
    var hairColor = "hairColor";
        var getHair = document.getElementById("charHair").value;
    var gender = "gender";
        var getGen = document.getElementById("charGender").value;
    var ethnicity = "ethnicity";
        var getEth = document.getElementById("charEthnicity").value;
    var race = "race/species";
        var getRace = document.getElementById("charRace").value;
    var build = "physicalBuild";
        var getBuild = document.getElementById("charBuild").value;
    var features = "features";
        var getFeat = document.getElementById("charFeat").value;
    var charWant = "charWant";
        var getWant = document.getElementById("charWant").value;
    var charFear = "charFear";
        var getFear = document.getElementById("charFear").value;
    var charChild = "charChild";
        var getChild = document.getElementById("charChild").value;
    var charAdol = "charAdol";
        var getAdol = document.getElementById("charAdol").value;
    var charAdult = "charAdult";
        var getAdult = document.getElementById("charAdult").value;
    
    //Character Objects
    var charName = {name: getName,
        //intro: function fullIntro() {return "Hi, I'm " + this.charName + ". Who's ready for an adventure?";
        //}
    };
    
    var appearance = {
      eyeColor: getEye,
      hairColor: getHair,
      gender: getGen,
      ethnicity: getEth,
      race: getRace,
      build: getBuild,
      features: getFeat,
        
    };
    
    var personality = {
        charWant: getWant,
        charFear: getFear
    };
    
    var background = {
        charChild: getChild,
        charAdol: getAdol,
        charAdult: getAdult
    };
    
    // Display Character Objects
    document.getElementById("postName").innerHTML = "Name: " + charName.name;
    document.getElementById("sumName").innerHTML = "Main Character: " + charName.name;
        
    //document.getElementById("charIntro").innerHTML = charName.fullIntro();
    
    // Display Appearance
    document.getElementById("postEye").innerHTML = "Eye Color: " + appearance.eyeColor;
    document.getElementById("postHair").innerHTML = "Hair Color: " + appearance.hairColor;
    document.getElementById("postGen").innerHTML = "Gender: " + appearance.gender;
    document.getElementById("postEth").innerHTML = "Ethnicity: " +appearance.ethnicity;
    document.getElementById("postRace").innerHTML = "Race: " + appearance.race;
    document.getElementById("postBuild").innerHTML = "Build: " + appearance.build;
    document.getElementById("postFeat").innerHTML = "Features: " + appearance.features;

    // Display Personality
    document.getElementById("postWant").innerHTML = "Wants: " + personality.charWant; 
    document.getElementById("postFear").innerHTML = "Fears: " + personality.charFear;
    
    // Display Background
    document.getElementById("postChild").innerHTML = "Childhood: " + background.charChild;
    document.getElementById("postAdol").innerHTML = "Adolescence: " + background.charAdol;
    document.getElementById("postAdult").innerHTML = "Adulthood: " + background.charAdult;
        
    // Slide Button
     var element = document.getElementById("charSub");
    element.classList.toggle("slideButton");
    document.getElementById("charSub").style.fontFamily = '"Georgia", serif';
    
    //Saving Objects:
        JSONcharName = JSON.stringify(charName);
        localStorage.setItem("charNameJSON", JSONcharName);
    
        JSONappearance = JSON.stringify(appearance);
        localStorage.setItem("appearanceJSON", JSONappearance);
    
        JSONpersonality = JSON.stringify(personality);
        localStorage.setItem("personalityJSON", JSONpersonality);
    
        JSONbackground = JSON.stringify(background);
        localStorage.setItem("backgroundJSON", JSONbackground);
  
}

function deleteChar() {
    localStorage.removeItem("charNameJSON");
    localStorage.removeItem("appearanceJSON");
    localStorage.removeItem("personalityJSON");
    localStorage.removeItem("backgroundJSON");
    
    // Slide Button
     var element = document.getElementById("deleteChar");
    element.classList.toggle("slideDelButton");
}

function addOrg() {
    // Organization Variables
    var name = "name"
    var getName = document.getElementById("inName").value;
    var background = "background"
    var getBg = document.getElementById("inBg").value;
    var motivation = "motivations"
    var getMotiv = document.getElementById("inMotiv").value;
    var goal = "goal"
    var getGoal = document.getElementById("inGoal").value;
    var rulesForEntry = "rulesForEntry"
    var getRule = document.getElementById("inRule").value;
    var ConsequencesForDeparture = "ConsequencesForDeparture"
    var getFire = document.getElementById("inFire").value;
    var LeadershipStructure = "LeadershipStructure"
    var getLead = document.getElementById("inLead").value;
    
    // Organizatoin Object
    var org = {
        name: getName,
        background: getBg,
        motivation: getMotiv,
        goal: getGoal,
        rulesForEntry: getRule,
        ConsequencesForDeparture: getFire,
        LeadershipStructure:getLead    
    }

    // Display Org 
    document.getElementById("sumOrg").innerHTML = "Organization: " + org.name;
        
    document.getElementById("orgName").innerHTML = "Name: " + org.name;
    
    document.getElementById("orgBg").innerHTML = "Background: " + org.background;
        
    document.getElementById("orgMotiv").innerHTML = "Motivation: " + org.motivation;
        
    document.getElementById("orgGoal").innerHTML = "Goal: " + org.goal; 
        
    document.getElementById("orgRule").innerHTML = "Rules for Entry: " + org.rulesForEntry; 
        
    document.getElementById("orgFire").innerHTML = "Consequences for Departure: " + org.ConsequencesForDeparture; 
        
    document.getElementById("orgLead").innerHTML = "Leadership Structure: " + org.LeadershipStructure; 
    
        
    // Slide Button
     var element = document.getElementById("orgSub");
    element.classList.toggle("slideButton");
    document.getElementById("orgSub").style.fontFamily = '"Georgia", serif';
    
    //Saving Object:
        JSONorg = JSON.stringify(org);
        localStorage.setItem("orgJSON", JSONorg);
    
    //Load Object:
        text = localStorage.getItem("orgJSON");
        org = JSON.parse(text);
        document.getElementById("orgTest").innerHTML = org.name;   
}

function deleteOrg() {
    localStorage.removeItem("orgJSON");
    
    // Slide Button
     var element = document.getElementById("orgDel");
    element.classList.toggle("slideDelButton");
}

function addMag() {
     // Magic Variables
    var name = "name"
    var getName = document.getElementById("inMagName").value;
    var overview = "overview"
    var getOver = document.getElementById("inMagOver").value;
    var capabilities = "capabilities"
    var getCap = document.getElementById("inMagCap").value;
    var limitations = "limitations"
    var getLim = document.getElementById("inMagLim").value;
    var costOfUse = "costOfUse"
    var getCost = document.getElementById("inMagCost").value;
    var weaknesses = "weaknesses"
    var getWeak = document.getElementById("inMagWeak").value;
    
    // Magic Object
    var mag = {
        name: getName,
        overview: getOver,
        capabilities : getCap,
        limitations: getLim,
        costOfUse: getCost,
        weaknesses:getWeak    
    }

    //Display Magic:        
    document.getElementById("sumMag").innerHTML = "Magic: " + mag.name;
        
    document.getElementById("magName").innerHTML = "Name: " + mag.name;
    
    document.getElementById("postOver").innerHTML = "Overview: " + mag.overview;
        
    document.getElementById("postCap").innerHTML = "Capabilities: " + mag.capabilities;
        
    document.getElementById("postLim").innerHTML = "Limitations: " + mag.limitations; 
        
    document.getElementById("postCost").innerHTML = "Costs of Use: " + mag.costOfUse; 
        
    document.getElementById("postWeak").innerHTML = "Weakness: " + mag.weaknesses; 
    
    // Slide Button
     var element = document.getElementById("magSub");
    element.classList.toggle("slideButton");
     document.getElementById("magSub").style.fontFamily = '"Georgia", serif';
    
    
    //Saving Magic:
        JSONmag = JSON.stringify(mag);
        localStorage.setItem("magJSON", JSONmag);
    
    //Load Magic:
        text = localStorage.getItem("magJSON");
        mag = JSON.parse(text);
    

}

function deleteMag() {
    localStorage.removeItem("magJSON");
    
    // Slide Button
     var element = document.getElementById("magDel");
    element.classList.toggle("slideDelButton");
}

function addGeo() {
     // Magic Variables
    var cities = "cities "
    var getCit = document.getElementById("inCit").value;
    
    var rivers = "rivers"
    var getRiv = document.getElementById("inRiv").value;
    
    var landmarks = "landmarks"
    var getLand = document.getElementById("inLand").value;
    
    var mountains = "mountains"
    var getMount = document.getElementById("inMount").value;
    
    var deserts = "deserts"
    var getDes = document.getElementById("inDes").value;
    
    // Organization Object
    var geo = {
        cities: getCit,
        rivers: getRiv,
        landmarks: getLand,
        mountains: getMount,
        deserts: getDes
    }
    
    // Slide Button
     var element = document.getElementById("geoSub");
    element.classList.toggle("slideButton");
    
    // Display Org
        
    document.getElementById("sumGeo").innerHTML = "Cities: " + geo.cities;
        
    document.getElementById("postCit").innerHTML = "Cities: " + geo.cities;
    
    document.getElementById("postRiv").innerHTML = "Rivers: " + geo.rivers;
        
    document.getElementById("postLand").innerHTML = "Landmarks: " + geo.landmarks;
        
    document.getElementById("postMount").innerHTML = "Mountains: " + geo.mountains; 
        
    document.getElementById("postDes").innerHTML = "Deserts: " + geo.deserts;  
    
    //Saving Object:
        JSONgeo = JSON.stringify(geo);
        localStorage.setItem("geoJSON", JSONgeo);
    
    //Load Object:
        text = localStorage.getItem("geoJSON");
       geo = JSON.parse(text);
        document.getElementById("geoTest").innerHTML = geo.cities;  
}

function deleteGeo() {
    localStorage.removeItem("geoJSON");
    
    // Slide Button
     var element = document.getElementById("geoDel");
    element.classList.toggle("slideDelButton");
}

function addNote(){
    // Establish an ID for each note
    function makeCounter() {
        counter += 1;
        return counter;		
        }

    var idNum = makeCounter();
    
    // Store my Variables
    var myNote = document.getElementById("textArea").value;

    // Print this note
    var pNode = document.createElement("p");
        pNode.setAttribute("class", "listP" );
        pNode.setAttribute("id", idNum );
    var pText = document.createTextNode(document.getElementById("textArea").value);
        pNode.appendChild(pText);
    document.getElementById("noteList").appendChild(pNode);
    
    // Create Array of Notes
    var notesList = [];    
    var x = document.getElementsByClassName('listP');
    var i;
        for (i = 0; i < x.length; i++) {
           var add = x[i].innerHTML;
            notesList.push(add);
        }  

    //Saving Object to Local Storage:
        JSONnotes = JSON.stringify(notesList);
        localStorage.setItem("notesJSON", JSONnotes);
    
}

function delOldNote(){

    var list = document.getElementById("noteList");
    list.removeChild(list.childNodes[0]);
    
    // Create Array of Notes
    var notesList = [];    
    var x = document.getElementsByClassName('listP');
    var i;
        for (i = 0; i < x.length; i++) {
           var add = x[i].innerHTML;
            notesList.push(add);
        }  

    //Saving Object to Local Storage:
        JSONnotes = JSON.stringify(notesList);
        localStorage.setItem("notesJSON", JSONnotes);

}

// Other Functions
function animeReq(){
    const app = document.getElementById('root');

    const logo = document.createElement('img');
    logo.src = 'https://github.com/taniarascia/sandbox/blob/master/ghibli/logo.png?raw=true';

    const container = document.createElement('div');
	container.setAttribute('class', 'container');

	app.appendChild(logo);
	app.appendChild(container);

    var request = new XMLHttpRequest();
	request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
    request.onload = function () {

// Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
	data.forEach(movie => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const h1 = document.createElement('h1');
    h1.textContent = movie.title;

    const p = document.createElement('p');
    movie.description = movie.description.substring(0, 300);
    p.textContent = `${movie.description}...`;

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);
    });
    } else {
	    const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
            }
		}
request.send();
}

function clearAll() {
    localStorage.clear();
    location.reload();
}
    
    
    
    
    


