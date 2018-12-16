//Top Menu Fuctions
function HamburgerNav() {
	document.getElementsByClassName("hamNav")[0].classList.toggle("responsive");
}

function authorNav() {
	document.getElementsByClassName("authorNav")[0].classList.toggle("responsive");
}

//onload Display Functions
function displayTitle(){
    // This function is needed for onload purposes, not the user interface.
    var objTitle;
    
    text = localStorage.getItem("TitleJSON");
        objTitle = JSON.parse(text);
    
    if (objTitle == "undefined") {
        document.getElementById("displayTitle").innerHTML = "Start your story below...";  
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
    
    if (charName == "undefined") {
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

function displayOrg(){
    // This function is needed for onload purposes, not the user interface.
    
    var org;
    
    // Load Org
    text = localStorage.getItem("orgJSON");
        org = JSON.parse(text);
    
    if (org == "undefined") {
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
    
    if (mag == "undefined") {
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
    
    if (geo == "undefined") {
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
    
    var element = document.getElementById("perNotes");
    element.classList.toggle("spin");
}

// Input Functions

function focusBg(x){
    x.style.background = "yellow";
}

function blurBg(x){
    x.style.background = "cornflowerblue";
}

// Fantasy Menu Functions

function addTitle(){
        
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
    
 }

function delTitle() {
    localStorage.removeItem("TitleJSON");
}

function addChar(){
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
    document.getElementById("postAdol").innerHTML = "Childhood: " + background.charAdol;
    document.getElementById("postAdult").innerHTML = "Childhood: " + background.charAdult;
        
    // Slide Button
     var element = document.getElementById("charSub");
    element.classList.toggle("slideButton");
    
    //Saving Objects:
        JSONcharName = JSON.stringify(charName);
        localStorage.setItem("charNameJSON", JSONcharName);
    
        JSONappearance = JSON.stringify(appearance);
        localStorage.setItem("appearanceJSON", JSONappearance);
    
        JSONpersonality = JSON.stringify(personality);
        localStorage.setItem("personalityJSON", JSONpersonality);
    
        JSONbackground = JSON.stringify(background);
        localStorage.setItem("backgroundJSON", JSONbackground);

    //Loading and Test Objects:
        text = localStorage.getItem("charNameJSON");
        charName = JSON.parse(text);
            document.getElementById("charTest1").innerHTML = charName.name;
    
        text = localStorage.getItem("appearanceJSON");
        appearance = JSON.parse(text);
            document.getElementById("charTest2").innerHTML = appearance.eyeColor;

        text = localStorage.getItem("personalityJSON");
        personality = JSON.parse(text);
            document.getElementById("charTest3").innerHTML = personality.charWant;

        text = localStorage.getItem("backgroundJSON");
        background = JSON.parse(text);
            document.getElementById("charTest4").innerHTML = background.charChild;
  
}

function deleteChar(){
    localStorage.removeItem("charNameJSON");
    localStorage.removeItem("appearanceJSON");
    localStorage.removeItem("personalityJSON");
    localStorage.removeItem("backgroundJSON");
}

function addOrg(){
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
    
    //Saving Object:
        JSONorg = JSON.stringify(org);
        localStorage.setItem("orgJSON", JSONorg);
    
    //Load Object:
        text = localStorage.getItem("orgJSON");
        org = JSON.parse(text);
        document.getElementById("orgTest").innerHTML = org.name;   
}

function deleteOrg(){
    localStorage.removeItem("orgJSON");
}

function addMag(){
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
    document.getElementById("magTest").innerHTML = mag.name;
    
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
    
    //Saving Magic:
        JSONmag = JSON.stringify(mag);
        localStorage.setItem("magJSON", JSONmag);
    
    //Load Magic:
        text = localStorage.getItem("magJSON");
        mag = JSON.parse(text);
    

}

function deleteMag(){
    localStorage.removeItem("magJSON");
}

function addGeo(){
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

function deleteGeo(){
    localStorage.removeItem("geoJSON");
}

function clearAll() {
    localStorage.clear()
}
