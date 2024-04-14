console.log("Script loaded");

document.getElementById("sendMessage").addEventListener("click", function () {
  console.log("Button clicked");
  const tg = window.Telegram.WebApp;
  tg.sendData("Hello from my Mini App!");
  console.log("Data sent");
});
