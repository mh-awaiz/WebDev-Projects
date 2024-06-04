// // const apiUrl = `https:/pm.ansarijr.com/result?lat=${latitude}&long=${longitude}&rad=${radius}&beamid=${beam}`;

let latitude;
let longitude;
let radius;
let beam;

document.getElementById("mySubmit").onclick = function () {
  latitude = document.getElementById("lati").value;
  longitude = document.getElementById("long").value;
  radius = document.getElementById("rad").value;
  beam = document.getElementById("beam").value;

  let myLink = `https:/pm.ansarijr.com/result?lat=${latitude}&long=${longitude}&rad=${radius}&beamid=${beam}`

  console.log(myLink);

  document.getElementById(
    "output"
  ).textContent = myLink;

  let anchor = document.getElementById("urlPage");

  anchor.href = myLink;

  document.getElementById("output").style.display = "block";
  document.getElementById("finalBtn").style.display = "block";
};


