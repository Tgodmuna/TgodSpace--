let hi = document.getElementById("greeting");
let getUserName = prompt("please๐ tell me your name");
if (getUserName === null || getUserName === "" || getUserName === undefined) {
  hi.innerHTML =
    "<p>Vistor..! You Didn't Tell Me Your Name๐ญโนโน <br> By The Way You Are Welcome To My Portfolio<p>";
} else {
  let showGreeting = (hi.innerHTML =
    "<p>Hi๐<p1>" +
    getUserName.toUpperCase() +
    "<p>welcome to my Portfolio ๐๐๐๐<p>");
}
hi.style.color
