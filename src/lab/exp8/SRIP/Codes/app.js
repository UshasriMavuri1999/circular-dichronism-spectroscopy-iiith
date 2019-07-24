var root=document.querySelector('.maindiv');

fetch("dynamic.json")
.then((result)=>{
  return result.json()})
.then((data)=>{
  var left=document.createElement("div");
  left.classList.add("leftdiv");
  root.append(left);

  var left1=document.createElement("div");
  left1.classList.add("ic1");
  left.append(left1);

  var pic=document.createElement("img");
  pic.src=data.sd.picture;
  left1.append(pic);

  var title=document.createElement("h3");
  title.textContent=data.sd.name;
  left1.append(title);

  var num=document.createElement("h3");
  num.textContent=data.sd.regdno;
  left1.append(num);

  var left2=document.createElement("div");
  left2.classList.add("ic2");
  left.append(left2);

  var mail=document.createElement("h3");
  mail.textContent=data.sd.emailid;
  left2.append(mail);

  var phone=document.createElement("h3");
  phone.textContent=data.sd.cellno;
  left2.append(phone);


  var right=document.createElement("div");
  right.classList.add("rightdiv");
  root.append(right);

  var edu=document.createElement("h2");
  edu.textContent="Education";
  right.append(edu);



  for(var i in data.education){
    var rightp=document.createElement("div");
    rightp.classList.add("rightChild");
    right.append(rightp);

    var eduType=document.createElement("h3");
    eduType.textContent=data.education[i].type;
    rightp.append(eduType);

    var eduDes=document.createElement("p");
    eduDes.textContent=data.education[i].description;
    rightp.append(eduDes);
  }

  var skil=document.createElement("h2");
  skil.textContent="Skills";
  right.append(skil);


  for(var i in data.skills){
    var rightp=document.createElement("div");
    rightp.classList.add("rightChild");
    right.append(rightp);

    var skill=document.createElement("h3");
    skill.textContent=data.skills[i].keywords;
    rightp.append(skill);

    var skill1=document.createElement("p");
    skill1.textContent=data.skills[i].name;
    rightp.append(skill1);
  }




})
