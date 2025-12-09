document.addEventListener("DOMContentLoaded", () => {
  // 1. Elementos
  const splashScreen = document.getElementById("splash-screen");
  const mainMenu = document.getElementById("main-menu");

  const screens = {
    falar: document.getElementById("screen-falar"),
    sons: document.getElementById("screen-sons"),
    brincar: document.getElementById("screen-brincar"),
    historias: document.getElementById("screen-historias"),
  };

  // --- ÁUDIO PERSONALIZADO ---
  const audioBoasVindas = new Audio("ola.mp3");

  // 2. Splash Screen Timer (3 segundos)
  setTimeout(() => {
    splashScreen.style.display = "none";
    mainMenu.classList.remove("hidden");
  }, 3000);

  // 3. Navegação
  window.openScreen = (screenName) => {
    mainMenu.classList.add("hidden");
    if (screens[screenName]) {
      screens[screenName].classList.remove("hidden");
    }
  };

  window.goHome = () => {
    Object.values(screens).forEach((screen) => {
      screen.classList.add("hidden");
    });
    mainMenu.classList.remove("hidden");
  };

  // 4. FUNÇÃO 1: TOCAR ÁUDIO GRAVADO (Girassol)
  window.tocarOla = () => {
    window.speechSynthesis.cancel();
    audioBoasVindas.pause();
    audioBoasVindas.currentTime = 0;
    audioBoasVindas.play();
  };

  // 5. FUNÇÃO 2: VOZ SINTÉTICA (Botões AAC)
  window.falar = (texto) => {
    audioBoasVindas.pause();
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "pt-BR";
    utterance.rate = 1.0;
    utterance.pitch = 1.4;

    window.speechSynthesis.speak(utterance);
  };

  // 6. Sons (Placeholder)
  window.tocarSom = (tipo) => {
    console.log("Som: " + tipo);
    alert("🎵 Imagine o som de: " + tipo);
  };
});
