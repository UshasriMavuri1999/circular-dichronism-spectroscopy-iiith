var header = document.createElement("header");
header.classList.add("header");
document.body.append(header);

  var topimgdiv = document.createElement("div");
  topimgdiv.classList.add("topimgdiv");
  header.append(topimgdiv);

    var topimg = document.createElement("img");
    topimg.classList.add("topimg");
    topimg.src="../img/logo.jpg";
    topimgdiv.append(topimg);

    var heading1div = document.createElement("div");
    heading1div.classList.add("heading1div");
    header.append(heading1div);

    var heading1 = document.createElement("h1");
    heading1.classList.add("heading1");
    heading1.textContent="CIRCULAR DICHROISM VIRTUAL LAB";
    heading1div.append(heading1);

    var mainarticle = document.createElement("article");
    mainarticle.classList.add("mainarticle");
    document.body.append(mainarticle);
	
	var firstdiv = document.createElement("div");
	firstdiv.classList.add("firstdiv");
	mainarticle.append(firstdiv);

   var home = document.createElement("a");
   home.textContent="Home <";
   //home.src="../../index.html";
   
   firstdiv.append(home);
   
   var cdvl = document.createElement("a");
   cdvl.textContent=" Circular Dichroism Virtual Lab <";
  
   firstdiv.append(cdvl);
   
   var tsp = document.createElement("a");
   tsp.textContent=" To Study the Thermal Stability of Proteins ";
   firstdiv.append(tsp);
   
   
   var header2= document.createElement("header");
   header2.classList.add("header2");
   header2.textContent="To Study the Thermal Stability of Proteins";
   mainarticle.append(header2);


    // var introduction = document.createElement("div");
    // introduction.classList.add("introduction");
    // maindiv.append(introduction);
    //
    // var objective = document.createElement("div");
    // objective.classList.add("objective");
    // maindiv.append(objective);
    //
    // var listOfExperiments = document.createElement("div");
    // listOfExperiments.classList.add("listOfExperiments");
    // maindiv.append(listOfExperiments);
    //
    // var targetAudience = document.createElement("div");
    // targetAudienceAud.classList.add("targetAudience");
    // maindiv.append(targetAudience);
    //
    // var bgPrinciple = document.createElement("div");
    // bgPrinciple.classList.add("bgPrinciple");
    // maindiv.append(bgPrinciple);
    //
    // var prerequisite = document.createElement("div");
    // prerequisite.classList.add("prerequisite");
    // maindiv.append(prerequisite);
    //
    // var acknowledgement = document.createElement("div");
    // acknowledgement.classList.add("acknowledgement");
    // maindiv.append(acknowledgement);
    //
    // var intro = document.createElement("h3");
    // intro.classList.add("intro");
    // maindiv.append(intro);
