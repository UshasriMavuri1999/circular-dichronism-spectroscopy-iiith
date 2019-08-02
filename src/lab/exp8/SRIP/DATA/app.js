var root=document.querySelector('.maindiv');


  var header=document.createElement("header");
  header.classList.add("header");
  header.textContent="Experimental setup";
  root.append(header);

  var container=document.createElement("div");
  container.classList.add("container");
  document.body.append(container);

  var containerLeft=document.createElement("div");
  containerLeft.classList.add("containerLeft");
  container.append(containerLeft);


  var right1=document.createElement("div");
  right1.classList.add("right1");
  right1.textContent="STEPS";
  containerLeft.append(right1);



  var right2=document.createElement("div");
  right2.classList.add("right2");
  right2.textContent="Protein Solution";
  containerLeft.append(right2);

  right1Img = document.createElement("img");
  right1Img.classList.add("image");
  right1Img.src="dropper.jpg";
  right1Img.onclick="moveleft()";
right1Img.onclick="moveback()";
  right2.append(right1Img);

  var right3=document.createElement("div");
  right3.classList.add("right3");
  right3.textContent="Protein Solution";
  containerLeft.append(right3);

  right1Img = document.createElement("img");
  right1Img.classList.add("image");
  right1Img.src="dropper.jpg";
  right1Img.onclick="moveleft()";
right1Img.onclick="moveback()";
  right3.append(right1Img);

  var right4=document.createElement("div");
  right4.classList.add("right4");
  right4.textContent="Cuvette";
  containerLeft.append(right4);

  right1Img = document.createElement("img");
  right1Img.classList.add("image");
  right1Img.src="dropper.jpg";
  right1Img.onclick="moveleft()";
right1Img.onclick="moveback()";
  right4.append(right1Img);

var linediv = document. createElement("div");
linediv.classList.add("linediv");
container.append(linediv);

  var line = document.createElement("div");
  line.classList.add("line");
  linediv.append(line);

var tablediv = document.createElement("div");
tablediv.classList.add("tablediv");
container.append(tablediv);

  var hrline = document.createElement("hr");
  hrline.classList.add("hrline");
  tablediv.append(hrline);


  function moveleft()
  {
  document.getElementsByClassName('right1Img').style.position="absolute";
  document.getElementsByClassName('right1Img').style.left="0";
  }
  function moveback()
  {
  document.getElementsByClassName('right1Img').style.position="absolute";
  }
