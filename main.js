
function openOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.visibility = "visible";
}

function closeOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.visibility = "hidden";
}

window.addEventListener("load", openOverlay);

const openOverlayButton = document.getElementById("open-overlay-button");
openOverlayButton.addEventListener("click", openOverlay);

const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", closeOverlay);
////////////////////////////////////////////////////////////////////////

const noButton = document.getElementById("no-button");
noButton.addEventListener("mouseover", () => {
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;

  const adjustedX = Math.floor(Math.random() * (maxX + 1));
  const adjustedY = Math.floor(Math.random() * (maxY + 1));

  const minDistance = 100; // Distância mínima do botão em relação à borda

  const finalX = Math.max(minDistance, Math.min(adjustedX, maxX - minDistance));
  const finalY = Math.max(minDistance, Math.min(adjustedY, maxY - minDistance));

  noButton.style.position = "fixed";
  noButton.style.left = `${finalX}px`;
  noButton.style.top = `${finalY}px`;
});



const yesButton = document.getElementById('yes-button');

yesButton.addEventListener("click", () => {
  var confettiElement = document.getElementById('confetti-canvas');
  var confettiSettings = {
    target: confettiElement,
    max: 729,
    size: 1,
    animate: true,
    props: ['circle', 'square', 'triangle', 'line'],
    colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
    clock: 25,
    rotate: true,
    start_from_edge: true,
    respawn: true
  };

  yesButton.style.display = "none";
  noButton.style.display = "none";

  let overlayOpenButton = document.getElementById('open-overlay-button');
  overlayOpenButton.style.display = "none";

  let gif = document.getElementById("gif");
  let gifCat = document.getElementById("gif-cat");
  let gifCat2 = document.getElementById("gif-cat-2");
  let akiImage = document.getElementById("aki");
  let header = document.getElementById("header-main");
  header.style.display = "none";
  gif.style.display = "none";
  gifCat.style.display = "none";
  gifCat2.style.display = "none";
  aki.style.display ="none";

  // Change the style of the confetti canvas
  confettiElement.style.position = "absolute";
  confettiElement.style.top = "0";
  confettiElement.style.left = "0";
  confettiElement.style.width = "100%";
  confettiElement.style.height = "100%";
  confettiElement.style.zIndex = "1000";

  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  const musica = document.getElementById("musiquinha");
  musica.volume = 0.1;
  musica.play();

  
  // Add the heart animation
  var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

    $('.heart').each(function() {
      var top = $(this).css("top").replace(/[^-\d\.]/g, '');
      var width = $(this).css("width").replace(/[^-\d\.]/g, '');
      if (top <= -100 || width >= 150) {
        $(this).detach();
      }
    });
  }, 500);


  let p = document.createElement("p");
  p.innerText = "YUPPIIIIIII!!! 🎉 \n  VAMO MARCAR, OBRIGADOOO!";
  p.style.fontSize = "2rem";
  p.style.fontWeight = "bold";
  p.style.textAlign = "center";
  p.style.position = "absolute";
  p.style.top = "40%";
  p.style.left = "50%";
  p.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(p);

  const gifContainer = document.getElementById("container-gifs-evento");


  const gif1 = document.createElement("img");
  gif1.src = "./images/seal-sax.gif";
  gif1.alt = "GIF 1";
  gif1.style.marginBottom = "45px"
  gif1.style.marginRight = "50px"
  gif1.style.height = "320px"
  gif1.style.borderRadius = "30px"
  gifContainer.appendChild(gif1);

  const gif2 = document.createElement("img");
  gif2.src = "./images/c45.gif";
  gif2.alt = "GIF 2";
  gif2.style.marginBottom = "45px"
  gif2.style.marginRight = "50px"
  gif2.style.height = "320px"
  gif2.style.borderRadius = "30px"
  gifContainer.appendChild(gif2);

  const gif3 = document.createElement("img");
  gif3.src = "./images/chainsaw-man-kobeni.gif";
  gif3.alt = "GIF 3";
  gif3.style.marginBottom = "45px"
  gif3.style.height = "320px"
  gif3.style.borderRadius = "30px"
  gifContainer.appendChild(gif3);


  const gifContainer2 = document.getElementById("container-gif-evento-top")
  gifContainer2.style.display = "flex"
  gifContainer2.style.gap = "50px"
  gifContainer2.style.justifyContent = "center" 
  gifContainer2.style.position = "absolute";
  gifContainer2.style.top = "0"; 
  gifContainer2.style.left = "0"; 
  gifContainer2.style.right = "0"; 
  gifContainer2.style.textAlign = "center"; 
  gifContainer2.style.zIndex = "-9999"

  const gif4 = document.createElement("img");
  gif4.src = "./images/happy-happy-happy-cat.gif"; 
  gif4.alt = "GIF 4"; 
  gif4.style.marginBottom = "45px";
  gif4.style.height = "250px";
  gif4.style.borderRadius = "30px";
  gifContainer2.appendChild(gif4); 

  const gif5 = document.createElement("img");
  gif5.src = "./images/gengar-jumping.gif"; 
  gif5.alt = "GIF 5"; 
  gif5.style.marginBottom = "45px";
  gif5.style.height = "250px";
  gif5.style.borderRadius = "30px";
  gifContainer2.appendChild(gif5); 




  gifContainer.style.display = "block";

});
