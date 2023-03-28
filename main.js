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
        if (!res.ok) {
          throw new Error("Error");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        heart.classList.add("activated-heart");
      })
      .catch((error) => {
        console.log(`${error} sawa`);
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
