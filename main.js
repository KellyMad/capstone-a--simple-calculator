const screen = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let screenValue = "";

window.onload = function() {
  bindClickEvents();
};

function bindClickEvents() {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const buttonText = e.target.innerText;
  
      if (buttonText === "÷") {
        screenValue += "/";
      } else if (buttonText === "AC") {
        screenValue = "";
      } else if (buttonText === "=") {
        try {
          const result = eval(screenValue);
          screenValue = result;
        } catch (error) {
          screenValue = "Expression error";
        }
      } else if (buttonText === "DEL") {
        screenValue = screenValue.slice(0, -1);
      } else {
        screenValue += buttonText;
      }
  
      screen.innerText = screenValue;

    });
  });
}
