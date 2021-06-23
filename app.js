var LogIN = document.querySelector(".felsa");
var login = document.querySelector(".log-in");

LogIN.addEventListener("click", function () {
  login.classList.add("bg-active");
});

var closeb = document.querySelector(".closebox");
closeb.addEventListener("click", function () {
  login.classList.remove("bg-active");
});
