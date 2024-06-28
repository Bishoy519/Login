const namy = document.querySelector("#user-welcome");
const logOutBtn = document.querySelector("#btn-out")

if (localStorage.getItem("currentUser")) {
   namy.innerHTML =localStorage.getItem("currentUser");
  } else {
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  }

  logOutBtn.addEventListener("click", logout);
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

