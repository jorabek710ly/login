const BASE_URL = "https://dummyjson.com";
const formEl = document.querySelector("form");
const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {
    username: usernameInput.value,
    password: passwordInput.value,
    expiresInMins: 1,
  };

  fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Username or password is incorrect");
      }
      return res.json();
    })
    .then(data => {
      localStorage.setItem("access_token", data.accessToken);
      location.replace("/pages/admin.html");
    })
    .catch(err => {
      alert(err);
    });
});



// ======================================loading

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var button = document.getElementById('loginBtn');
  button.classList.add('loading');
  button.disabled = true;
  setTimeout(function() {
      button.classList.remove('loading');
      button.disabled = false; 
  }, 500);
});

