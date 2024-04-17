document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const captureButton = document.getElementById("capture");
  const switchCameraButton = document.getElementById("switchCamera");
  const cameraList = document.getElementById("cameraList");
  let currentStream;
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Get access to the camera
  // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true })
  //     .then(function (stream) {
  //       const video = document.getElementById("video");
  //       if ("srcObject" in video) {
  //         video.srcObject = stream;
  //       } else {
  //         // Older browsers may not support srcObject directly
  //         video.src = window.URL.createObjectURL(stream);
  //       }
  //       video.onloadedmetadata = function (e) {
  //         video.play();
  //       };
  //     })
  //     .catch(function (error) {
  //       console.error("Error accessing the camera: ", error);
  //       alert("Failed to access the camera.");
  //     });
  // } else {
  //   alert("getUserMedia() is not supported by your browser.");
  // }

  // Capture the photo
  captureButton.addEventListener("click", function () {
    context.drawImage(video, 0, 0, 640, 480);
    const imageData = canvas.toDataURL("image/png");

    // Optionally, send the image data to your server or use it directly
    console.log(imageData);
  });
});

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
