let modal;
document.addEventListener("click", (e) => {
  if (e.target.className === "modal-open") {
    modal = document.getElementById(e.target.dataset.id);
    openModal(modal);
  } else if (e.target.className === "modal-close") {
    closeModal(modal);
  } else {
    return;
  }
});

const openModal = (modal) => {
    document.body.style.overflow = "hidden";
    modal.setAttribute("open", "true");
    document.addEventListener("keydown", escClose);
    let overlay = document.createElement("div");
    overlay.id = "modal-overlay";
    document.body.appendChild(overlay);
  };

  const closeModal = (modal) => {
    document.body.style.overflow = "auto";
    modal.removeAttribute("open");
    document.removeEventListener("keydown", escClose);
    document.body.removeChild(document.getElementById("modal-overlay"));
  };

  const escClose = (e) => {
    if (e.keyCode == 27) {
      closeModal();
    }
  };

  function myFunction() {
    alert("Weet je het zeker dat je wilt betalen?");
  }

// de afloopdatum
const countDownDate = new Date("dec 31, 2021 00:00:00").getTime();

// Update de teller elke 1 seconde
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();
    
  // afstand tussen nu en de afloop datum
  const distance = countDownDate - now;
    
  // berekning van dagen, uren, minuten en secondes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output het resultaat in een element
  document.getElementById("timer").innerHTML = days + " DAG " + hours + " UUR "
  + minutes + " MIN " + seconds + " SEC ";
    
  // Wanneer de timer is afgelopen Komt er een tekst
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Deze sale is afgelopen!";
  }
}, 1000);
  