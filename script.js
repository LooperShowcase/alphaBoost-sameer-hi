function changeBG() {
  var newColor = document.getElementById("colorPicker").value;
  document.body.style.background = newColor;
}

function myFunction() {
  document.getElementById("myForm").submit();
}
function checkUserAndPassword() {
  var username = document.getElementById("typedUsername").value;
  var password = document.getElementById("typedPassword").value;

  if (username === "moraba3" && password === "mostatel") {
    window.location.href = "index.html";
  } else {
    alert("Wrong password. You cannot enter.");
  }
}

function changeBG() {
  var newColor = document.getElementById("colorPicker").value;
  document.body.style.background = newColor;
}

function ChangePic() {
  var newPic = document.getElementById("mypic").files[0].name;
  document.getElementById("batata").src = newPic;
}

function changeBG() {
  var newColor = document.getElementById("colorPicker").value;
  document.body.style.background = newColor;
}

function changeBGC() {
  var newColor = document.getElementById("colorPicker").value;
  document.body.style.background = newColor;
}

function changeBG() {
  var newColor = document.getElementById("colorPicker").value;
  document.body.style.background = newColor;
}
var name = document.getElementById("first").innerText;
console.log(name);

function changeBG() {
  var newColor = document.getElementById("colorPicker").value;
  document.body.style.background = newColor;
}
function changeText() {
  document.getElementById("first").innerText = "hello loopers";
}
function changeBackground() {
  document.body.style.background = "blue";
}
function changeprofile() {
  var newimage = document.getElementById("upload").files[0].name;
}
function addtolist() {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(
    document.createTextNode(document.getElementById(addedText).value)
  );
  ul.appendChild(li);
}

function changeBG() {
  var newColor = document.getElementById("colorPicker").value;
  document.body.style.background = newColor;
}
