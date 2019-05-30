//
// function loadJSON(file, callback) {
//   var rawFile = new XMLHttpRequest();
//   rawFile.overrideMimeType("application/json");
//   rawFile.open("GET", file, true);
//   rawFile.onreadystatechange = function() {
//     if (rawFile.readyState === 4 && rawFile.status == "200") {
//       callback(rawFile.responseText);
//     }
//   }
//   rawFile.send();
// }
// loadJSON("app.json", function(text){
//   let data = JSON.parse(text);
//   console.log(data);
//   hello(data.data);
// });
//
// var head = document.querySelector('.head');
// var bodyclass = document.querySelector('.bodyclass');
// var maindiv = document.querySelector('.maindiv');
// var hai = document.createElement("div");
// head.appendChild(hai);
// function hello(ha) {
//   var h1 = document.createElement("h1")
//   h1.textContent="hjkj"
//   hai.appendChild(h1);
//   var img =document.createElement("img")
//   img.src=ha.dataimg
//   hai.appendChild(img)
//
// }
var head = document.querySelector('.head');

fetch("app.json").then(result=>{
  return result.json()}).then(data=>{
    var top = document.createElement("header");
    top.classList.add("top");
    head.append(top);

  })


//     var topimg = document.createElement("img");
//     topimg.src=data.dataimg;
//     top.append(topimg);

    // var heading1 = document.createElement("h1");
    // heading1.classList.add("heading1");
    // heading1.textContent="hjhh";
    // bodyclass.append(heading1);
    //
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
    //
    // var para = document.createElement("h4");
    // para.classList.add("para");
    // maindiv.append(para);
