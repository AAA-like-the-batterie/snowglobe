const globe = document.querySelector("#globe"); //the selector (#) are the same in CSS
const button = document.querySelector("#shake");
const message = document.querySelector("#message");
console.log(button);

const messages = [
  "You are someone's favourite person to sit next to.",
  "The thing you are building counts, even half finished.",
  "You are allowed to be a beginner for as long as you need.",
  "Someone is going to love what you make with this.",
  "Hot chocolate tastes better after a hard day. You've earned one.",
  "You ask good questions. That is the whole skill.",
  "Just one more day, and vacations will came.",
   "If sadness didn't exist how do you know when you're happy ? ", // Huh, I don't if everyone would want to see a message like that, but that's my case ( Am I weird ?Maybe...)
]
 
button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);

  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
}); 

  