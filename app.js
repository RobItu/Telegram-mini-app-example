/**
 * When webpage is loaded (DOM) it will obtain the video, canvas and Switch/Capture buttons from HTML
 * when users click on capture button, the image will be encoded and output on the browser console
 *
 */

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");
  //const context = canvas.getContext("2d");
  const captureButton = document.getElementById("capture");
  const switchCameraButton = document.getElementById("switchCamera");
  const cameraList = document.getElementById("cameraList");
  let currentStream;

  const userIdDisplay = document.getElementById("userIdDisplay");
  const showUserIdButton = document.getElementById("showUserId");

  showUserIdButton.addEventListener("click", function () {
    // Make sure the Telegram WebApp API is available
    if (window.Telegram && window.Telegram.WebApp) {
      Telegram.WebApp.ready();
      const userID = Telegram.WebApp.initDataUnsafe.user.id;
      userIdDisplay.textContent = `Your Telegram ID is: ${userID}`;
      const userData = Telegram.WebApp.initDataUnsafe.user;
      console.log("User ID:", userData.id);
      console.log("First Name:", userData.first_name);
      console.log("Last Name:", userData.last_name);
      console.log("Username:", userData.username);
      console.log("Language Code:", userData.language_code);
      console.log("Is Bot:", userData.is_bot);
      console.log("Photo URL:", userData.photo_url);
    } else {
      userIdDisplay.textContent =
        "This feature is only available within the Telegram app.";
    }
  });

  // Capture the photo
  captureButton.addEventListener("click", function () {
    context.drawImage(video, 0, 0, 640, 480);
    const imageData = canvas.toDataURL("image/png");

    // Optionally, send the image data to your server or use it directly
    console.log(imageData);
  });
});

/***
 * When users clicks on Start Camera button, it will prompt the user to allow for permission
 * If permission is granted, Camera will start
 * If no camera is present, or permission is denied, error will be outputed.
 ***/

document.getElementById("startCamera").addEventListener("click", function () {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        const video = document.getElementById("video");
        video.srcObject = stream;
        video.play();
      })
      .catch(function (error) {
        console.error("Error accessing the camera: ", error);
        alert("Failed to access the camera.");
      });
  } else {
    alert("getUserMedia() is not supported by your browser.");
  }
});
