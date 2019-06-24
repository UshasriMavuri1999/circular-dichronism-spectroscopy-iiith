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


  	var firstdiv = document.createElement("div");
  	firstdiv.classList.add("firstdiv");
  	document.body.append(firstdiv);

    var home = document.createElement("a");
    home.textContent="   Home > ";
    firstdiv.append(home);

    var cdvl = document.createElement("a");
    cdvl.textContent=" Circular Dichroism Virtual Lab > ";

    firstdiv.append(cdvl);

    var tsp = document.createElement("a");
    tsp.textContent=" To Study the Thermal Stability of Proteins ";
    firstdiv.append(tsp);

    var mainarticle = document.createElement("article");
    mainarticle.classList.add("mainarticle");
    document.body.append(mainarticle);

   var header2= document.createElement("header");
   header2.classList.add("header2");
   header2.textContent="To Study the Thermal Stability of Proteins.";
   mainarticle.append(header2);


   var innerExpArticle2 = document.createElement("div");
   innerExpArticle2.classList.add("innerExpArticle2");
   document.body.append(innerExpArticle2);

   var innerExpArticle1 = document.createElement("div");
   innerExpArticle1.classList.add("innerExpArticle1");
   innerExpArticle2.append(innerExpArticle1);


    var introduction = document.createElement("a");
    introduction.href="index.html";
    introduction.classList.add("introduction");
    innerExpArticle1.append(introduction);

    var img = document.createElement("img");
    img.classList.add("img");
    img.src="../img/introduction.jpg";
    introduction.append(img);

    var text = document.createElement("h3");
    text.classList.add("text");
    text.textContent="INTRODUCTION";
    introduction.append(text);

    var theory = document.createElement("a");
    theory.classList.add("theory");
    theory.href="theory.html";
    innerExpArticle1.append(theory);

    var img = document.createElement("img");
    img.classList.add("img");
    img.src="../img/theory.jpg";
    theory.append(img);

    var text = document.createElement("h3");
    text.classList.add("text");
    text.textContent="THEORY";
    theory.append(text);

    var objective = document.createElement("a");
    objective.classList.add("objective");
    objective.href="objective.js";
    innerExpArticle1.append(objective);

    var img = document.createElement("img");
    img.classList.add("img");
    img.src="../img/objective.jpg";
    objective.append(img);

    var text = document.createElement("h3");
    text.classList.add("text");
    text.textContent="OBJECTIVE";
    objective.append(text);


    var experiment = document.createElement("a");
    experiment.href="experiment.html";
    experiment.classList.add("experiment");
    innerExpArticle1.append(experiment);

    var img = document.createElement("img");
    img.classList.add("img");
    img.src="../img/simulation.jpg";
    experiment.append(img);

    var text = document.createElement("h3");
    text.classList.add("text");
    text.textContent="EXPERIMENT";
    experiment.append(text);

    var manual = document.createElement("a");
    manual.href="manual.html";
    manual.classList.add("manual");
    innerExpArticle1.append(manual);

    var img = document.createElement("img");
    img.classList.add("img");
    img.src="../img/theory.jpg";
    manual.append(img);

    var text = document.createElement("h3");
    text.classList.add("text");
    text.textContent="MANUAL";
    manual.append(text);

    var quizzes = document.createElement("a");
    quizzes.href="quizzes.html";
    quizzes.classList.add("quizzes");
    innerExpArticle1.append(quizzes);

    var img = document.createElement("img");
    img.classList.add("img");
    img.src="../img/quizzes.jpg";
    quizzes.append(img);

    var text = document.createElement("h3");
    text.classList.add("text");
    text.textContent="QUIZZES";
    quizzes.append(text);

    var other = document.createElement("a");
    other.href="other.html";
    other.classList.add("other");
    innerExpArticle1.append(other);

    var img = document.createElement("img");
    img.classList.add("img");
    img.src="../img/readings.jpg";
    other.append(img);

    var text = document.createElement("h3");
    text.classList.add("text");
    text.textContent="FURTHER READINGS";
    other.append(text);

    var introHeading = document.createElement("h2");
    introHeading.classList.add("p1");
    introHeading.textContent="Objective";
    innerExpArticle2.append(introHeading);


  var para = document.createElement("p");
  para.classList.add("para");
  para.textContent="The purpose of this lab is to make students familiar with the concept that structure of a protein is highly dependent on the environmental temperature and use of CD spectroscopy method to study the effect of temperature on protein structure. By doing this experiment user will be able to,";
  innerExpArticle2.append(para);

  var ol = document.createElement("ol");
  ol.classList.add("ol");
  innerExpArticle2.append(ol);

  var li = document.createElement("li");
  li.classList.add("li");
  li.textContent="Make the student understand how temperature causes unfolding of a protein.";
  ol.append(li);

  var li = document.createElement("li");
  li.classList.add("li");
  li.textContent="Understand how CD spectroscopy can be used to study unfolding.";
  ol.append(li);

  var li = document.createElement("li");
  li.classList.add("li");
  li.textContent="Observe transition between folded and unfolded state.";
  ol.append(li);

  var li = document.createElement("li");
  li.classList.add("li");
  li.textContent="Determine the transition temperature using CD spectra at different temperatures";
  ol.append(li);


  var foot=document.createElement("footer");
  foot.classList.add("foot");
  document.body.append(foot);

   var foot1 = document.createElement("a");
   foot1.classList.add("foot1");
   foot1.href="http://virtual-labs.ac.in/nmeict/";
   foot1.textContent="Sponsered by MHRD (NME-ICT) | ";
   foot.append(foot1);

   var foot1=document.createElement("a");
   foot1.classList.add("foot1");
   foot1.href="http://virtual-labs.ac.in/licensing/";
   foot1.textContent=" Licensing Terms | ";
   foot.append(foot1);

   var foot1= document.createElement("a");
   foot1.classList.add("foot1");
   foot1.href="http://virtual-labs.ac.in/feedback/"
   foot1.textContent=" Feedback";
   foot.append(foot1);
