document.addEventListener("DOMContentLoaded", () => {
  const signForm = document.getElementById("signin-form");
  const regForm = document.getElementById("register-form");
  const message = document.getElementById("message") || document.getElementById("reg-message");
  const btn = document.querySelector(".btn");

  // SIGN IN l
  if (signForm) {
    signForm.addEventListener("submit", (e) => {
      e.preventDefault();
      btn.textContent = "Signing In...";
      btn.disabled = true;
      btn.style.opacity = "0.7";

      setTimeout(() => {
        message.textContent = "Welcome back! Redirecting...";
        message.style.color = "#4caf50";
        message.style.opacity = "1";
        setTimeout(() => (window.location.href = "index.html"), 2000);
      }, 1500);
    });
  }

  // REGISTER 
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pass = document.getElementById("password").value;
      const confirm = document.getElementById("confirm").value;

      if (pass !== confirm) {
        message.textContent = "❌ Passwords do not match!";
        message.style.color = "#e53935";
        message.style.opacity = "1";
        return;
      }

      btn.textContent = "Creating Account...";
      btn.disabled = true;
      btn.style.opacity = "0.7";

      setTimeout(() => {
        message.textContent = "Account created successfully! Redirecting...";
        message.style.color = "#4caf50";
        message.style.opacity = "1";

        setTimeout(() => {
          window.location.href = "sign.html";
        }, 2000);
      }, 1500);
    });
  }
});
