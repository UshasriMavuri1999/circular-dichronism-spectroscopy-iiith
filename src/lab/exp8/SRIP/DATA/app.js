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
  right1Img.src="Protein.jpg";
  right1Img.onclick="moveleft()";
right1Img.onclick="moveback()";
  right2.append(right1Img);

  var right3=document.createElement("div");
  right3.classList.add("right3");
  right3.textContent="Pipette";
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
  right1Img.src="cuvette.jpg";
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

spec = document.createElement("img");
spec.classList.add("spec");
spec.src="spectrometer.jpg";

  tablediv.append(spec);

  function moveleft()
  {
  document.getElementsByClassName('right1Img').style.position="absolute";
  document.getElementsByClassName('right1Img').style.left="0";
  }
  function moveback()
  {
  document.getElementsByClassName('right1Img').style.position="absolute";
  }
  function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
      }
    }
  }
  setInterval(function() {
  animate1();
  animate2();
  animate3();
}, 20)
function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    let progress = timing(timeFraction);

    draw(progress); // draw it

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
