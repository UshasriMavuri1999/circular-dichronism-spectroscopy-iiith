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

    var mainarticle = document.createElement("article");
    mainarticle.classList.add("mainarticle");
    document.body.append(mainarticle);




   var home = document.createElement("a");
   home.textContent="   Home > ";
   //home.src="../../index.html";

   firstdiv.append(home);

   var cdvl = document.createElement("a");
   cdvl.textContent=" Circular Dichroism Virtual Lab > ";

   firstdiv.append(cdvl);

   var tsp = document.createElement("a");
   tsp.textContent=" To Study the Thermal Stability of Proteins ";
   firstdiv.append(tsp);


   var header2= document.createElement("header");
   header2.classList.add("header2");
   header2.textContent="To Study the Thermal Stability of Proteins.";
   mainarticle.append(header2);

   var expArticle = document.createElement("div");
   expArticle.classList.add("expArticle");
   mainarticle.append(expArticle);

   var innerExpArticle = document.createElement("div");
   innerExpArticle.classList.add("innerExpArticle");
   expArticle.append(innerExpArticle);


    var introduction = document.createElement("div");
    introduction.classList.add("introduction");
    innerExpArticle.append(introduction);

    var img = document.createElement("img");
    img.classList.add("img");
    img.src="../img/introduction.jpg";
    introduction.append(img);

    var text = document.createElement("h3");
    text.classList.add("text");
    text.textContent="INTRODUCTION";
    introduction.append(text);

    var theory = document.createElement("div");
    theory.classList.add("theory");
    innerExpArticle.append(theory);

    var img = document.createElement("img");
    img.classList.add("img");
    img.src="../img/theory.jpg";
    theory.append(img);

    var text = document.createElement("h3");
    text.classList.add("text");
    text.textContent="THEORY";
    theory.append(text);

    var objective = document.createElement("div");
    objective.classList.add("objective");
    innerExpArticle.append(objective);

    var img = document.createElement("img");
    img.classList.add("img");
    img.src="../img/objective.jpg";
    objective.append(img);

    var text = document.createElement("h3");
    text.classList.add("text");
    text.textContent="OBJECTIVE";
    objective.append(text);


    var experiment = document.createElement("div");
    experiment.classList.add("experiment");
    innerExpArticle.append(experiment);

    var img = document.createElement("img");
    img.classList.add("img");
    img.src="../img/simulation.jpg";
    experiment.append(img);

    var text = document.createElement("h3");
    text.classList.add("text");
    text.textContent="EXPERIMENT";
    experiment.append(text);

    var manual = document.createElement("div");
    manual.classList.add("manual");
    innerExpArticle.append(manual);

    var img = document.createElement("img");
    img.classList.add("img");
    img.src="../img/theory.jpg";
    manual.append(img);

    var text = document.createElement("h3");
    text.classList.add("text");
    text.textContent="MANNUAL";
    manual.append(text);

    var quizzes = document.createElement("div");
    quizzes.classList.add("quizzes");
    innerExpArticle.append(quizzes);

    var img = document.createElement("img");
    img.classList.add("img");
    img.src="../img/quizzes.jpg";
    quizzes.append(img);

    var text = document.createElement("h3");
    text.classList.add("text");
    text.textContent="QUIZZES";
    quizzes.append(text);

    var other = document.createElement("div");
    other.classList.add("other");
    innerExpArticle.append(other);

    var img = document.createElement("img");
    img.classList.add("img");
    img.src="../img/readings.jpg";
    other.append(img);

    var text = document.createElement("h3");
    text.classList.add("text");
    text.textContent="FURTHER READINGS";
    other.append(text);

    var innerExpArticle2 = document.createElement("div");
    innerExpArticle2.classList.add("innerExpArticle2");
    expArticle.append(innerExpArticle2);

    var introHeading = document.createElement("h2");
    introHeading.textContent="Introduction";
    innerExpArticle2.append(introHeading);

    var para = document.createElement("p");
    para.classList.add("para");
  para.textContent="We all are familiar with the phenomena of boiling an egg. At higher temperature the egg white gets solidified. This phenomenon may be explained by the concept of thermal denaturation. The white portion of an egg is nothing but a protein called albumin. At higher temperatures the protein albumin unfolds and as a result the state of the protein changes from liquid to solid.";

     // Another interesting observation is that this process of unfolding is irreversible. So if we decrease the temperature of a boiled egg, the albumin will not refold and form a liquid state again. This phenomenon is explained in the following video.";

    innerExpArticle2.append(para);
