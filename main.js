// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const modal = document.getElementById("modal");
modal.classList.add("hidden");

const hearts = document.querySelectorAll(".like-glyph");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then((res) => {
        if (res.status > 200 && res.status < 300) {
          res.json();
        }
      })
      .then(() => {
        if (heart.classList.contains("activated-heart")) {
          heart.classList.remove("activated-heart");
        } else {
          heart.classList.add("activated-heart");
        }
      })
      .catch((error) => {
        const modalMessage = modal.querySelector("#modal-message");
        modalMessage.textContent = error;
        modal.classList.remove("hidden");
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  });
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
