// Função para abrir o overlay
function openOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.visibility = "visible";
}

// Função para fechar o overlay
function closeOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.visibility = "hidden";
}

// Adicionar eventos aos botões do overlay
window.addEventListener("load", openOverlay);
document
  .getElementById("open-overlay-button")
  .addEventListener("click", openOverlay);
document.getElementById("close-button").addEventListener("click", closeOverlay);

// Função para mover o botão "Não"
function moveNoButton() {
  const noButton = document.getElementById("no-button");
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;
  const minDistance = 100;

  const adjustedX = Math.max(
    minDistance,
    Math.min(Math.floor(Math.random() * (maxX + 1)), maxX - minDistance)
  );
  const adjustedY = Math.max(
    minDistance,
    Math.min(Math.floor(Math.random() * (maxY + 1)), maxY - minDistance)
  );

  noButton.style.position = "fixed";
  noButton.style.left = `${adjustedX}px`;
  noButton.style.top = `${adjustedY}px`;
}

document
  .getElementById("no-button")
  .addEventListener("mouseover", moveNoButton);

// Função principal para lidar com o clique no botão "Sim"
function handleYesClick() {
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const confettiElement = document.getElementById("confetti-canvas");

  // Configurações do confetti
  const confettiSettings = {
    target: confettiElement,
    max: 729,
    size: 1,
    animate: true,
    props: ["circle", "square", "triangle", "line"],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126],
    ],
    clock: 25,
    rotate: true,
    start_from_edge: true,
    respawn: true,
  };

  // Ocultar elementos
  [yesButton, noButton, document.getElementById("open-overlay-button")].forEach(
    (el) => (el.style.display = "none")
  );
  ["gif", "gif-cat", "gif-cat-2", "aki", "header-main", "marlee1"].forEach(
    (id) => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    }
  );

  // Configurar o canvas do confetti
  Object.assign(confettiElement.style, {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "1000",
  });

  // Iniciar o confetti
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  // Tocar música (se necessário)
  const musica = document.getElementById("musiquinha");
  if (musica) {
    musica.volume = 0.1;
    musica.play().catch((e) => console.error("Erro ao tocar música:", e));
  }

  // Adicionar texto de celebração
  const celebrationText = document.createElement("p");
  Object.assign(celebrationText.style, {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1001",
  });
  celebrationText.innerText = "YUPPIIIIIII!!! 🎉 \n ";
  document.body.appendChild(celebrationText);

  // Adicionar GIFs de celebração
  addCelebrationGifs();

  // Iniciar animação de corações
  startHeartAnimation();
}

// Função para adicionar GIFs de celebração
function addCelebrationGifs() {
  const gifContainer = document.getElementById("container-gifs-evento");
  const gifContainer2 = document.getElementById("container-gif-evento-top");

  const gifs = [
    { src: "./images/seal-sax.gif", alt: "GIF 1" },

    { src: "./images_animals/marlee2.jpeg", alt: "GIF 3" },
  ];

  const topGifs = [
    { src: "./images/happy-happy-happy-cat.gif", alt: "GIF 4" },
    { src: "./images_animals/docinho2.jpeg", alt: "GIF 5" },
  ];

  gifs.forEach((gif) => {
    const img = document.createElement("img");
    Object.assign(img, gif);
    Object.assign(img.style, {
      marginBottom: "45px",
      marginRight: "50px",
      height: "320px",
      borderRadius: "30px",
      backgroundColor: "none",
    });
    gifContainer.appendChild(img);
  });

  Object.assign(gifContainer2.style, {
    display: "flex",
    gap: "50px",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    textAlign: "center",
    zIndex: "1002",
  });

  topGifs.forEach((gif) => {
    const img = document.createElement("img");
    Object.assign(img, gif);
    Object.assign(img.style, {
      marginBottom: "45px",
      height: "250px",
      borderRadius: "30px",
    });
    gifContainer2.appendChild(img);
  });

  gifContainer.style.display = "block";
}

// Função para iniciar a animação de corações
function startHeartAnimation() {
  setInterval(() => {
    const r_num = Math.floor(Math.random() * 40) + 1;
    const r_size = Math.floor(Math.random() * 65) + 10;
    const r_left = Math.floor(Math.random() * 100) + 1;
    const r_bg = Math.floor(Math.random() * 25) + 100;
    const r_time = Math.floor(Math.random() * 5) + 5;

    const heart = document.createElement("div");
    heart.classList.add("heart");
    Object.assign(heart.style, {
      width: `${r_size}px`,
      height: `${r_size}px`,
      left: `${r_left}%`,
      background: `rgba(255,${r_bg - 25},${r_bg},1)`,
      animation: `love ${r_time}s ease`,
    });

    document.querySelector(".bg_heart").appendChild(heart);

    setTimeout(() => heart.remove(), r_time * 1000);
  }, 500);
}

// Adicionar evento de clique ao botão "Sim"
document.getElementById("yes-button").addEventListener("click", handleYesClick);
