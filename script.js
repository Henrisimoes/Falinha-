document.addEventListener("DOMContentLoaded", () => {
  const loginScreen = document.getElementById("login-screen");
  const splashScreen = document.getElementById("splash-screen");
  const mainMenu = document.getElementById("main-menu");

  const USER_TEST = "teste12@gmail.com";
  const PASS_TEST = "05210654109";

  window.handleLogin = () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if (email === USER_TEST && pass === PASS_TEST) {
      localStorage.setItem("falinha_logged", "true");
      loginScreen.classList.add("hidden");
      splashScreen.classList.remove("hidden");

      setTimeout(() => {
        splashScreen.classList.add("hidden");
        mainMenu.classList.remove("hidden");
      }, 2500);
    } else {
      document.getElementById("error-message").classList.remove("hidden");
    }
  };

  window.logout = () => {
    localStorage.removeItem("falinha_logged");
    location.reload();
  };

  if (localStorage.getItem("falinha_logged") === "true") {
    loginScreen.classList.add("hidden");
    mainMenu.classList.remove("hidden");
  }

  window.openScreen = (id) => {
    mainMenu.classList.add("hidden");
    document.getElementById(`screen-${id}`).classList.remove("hidden");
  };

  window.goHome = () => {
    document.querySelectorAll("section").forEach((s) => {
      if (s.id !== "main-menu") s.classList.add("hidden");
    });
    mainMenu.classList.remove("hidden");
  };

  window.falar = (msg) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(msg);
    u.lang = "pt-BR";
    window.speechSynthesis.speak(u);
  };

  window.tocarOla = () => falar("Olá, vamos brincar?");
});
