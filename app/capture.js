function getStream() {
  let constraintObj = {
    audio: false,
    video: {
      facingMode: "user",
      height: { max: 480 }
    }
  };

  //método para obtener el stream del usuario
  navigator.mediaDevices
    .getUserMedia(constraintObj)
    //promesa que captura el media stream
    .then(function(mediaStreamObj) {
      //Conecta el mediaStreamObj al src de  video Stream
      let videoStream = document.getElementById("videoStream");
      if ("srcObject" in videoStream) {
        videoStream.srcObject = mediaStreamObj;
      } else {
        videoStream.src = window.URL.createObjectURL(mediaStreamObj);
      }
      //Muestra el video en cuanto lo puede hacer.
      videoStream.onloadedmetadata = function(ev) {
        videoStream.play();
      };

      //add listeners for saving video/audio
      let start = document.getElementById("btnCapturar");
      let stop = document.getElementById("btnListo");
      let videoSave = document.getElementById("videoSave");
      let mediaRecorder = new MediaRecorder(mediaStreamObj);
      let myGifOs = [];

      //comienza a grabar
      start.addEventListener("click", ev => {
        //comienza a grabar

        mediaRecorder.start();
        console.log(mediaRecorder.state);
      });

      //Deja de grabar
      stop.addEventListener("click", ev => {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        //apaga la cámara
        mediaStreamObj.getTracks()[0].stop();
      });

      //Guardar en array mientas hay data disponible:
      mediaRecorder.ondataavailable = function(ev) {
        myGifOs.push(ev.data);
      };

      //Cuando para guardar en blob
      mediaRecorder.onstop = ev => {
        let blob = new Blob(myGifOs, { type: "video/mp4;" });
        // chunks = []; Si uno quisiera blanquear el array
        let videoURL = window.URL.createObjectURL(blob);
        videoSave.src = videoURL;
      };
    })
    //Si no funca
    .catch(function(err) {
      console.log(err.name, err.message);
      alert("Tu video no puede ser capturado");
    });
}

getStream();