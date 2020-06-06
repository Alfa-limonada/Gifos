let instance = null;
let myGifOs = [];
let start = document.getElementById("btnCapturar");
let stop = document.getElementById("btnListo");
stop.addEventListener("click", stopStream);
start.addEventListener("click", startStream);

// singleton nos permite tener una instancia unica de una clase
function getInstanceMediaRecorder(mediaStreamObj) {
  if (instance === null) {
    instance = new MediaRecorder(mediaStreamObj);
    return instance;
  } else {
    return instance;
  }
}
// método para obtener el stream del usuario
async function getStream() {
  let constraintObj = {
    audio: false,
    video: {
      facingMode: "user",
      height: { max: 480 },
    },
  };
  try {
    const mediaStreamObj = await navigator.mediaDevices.getUserMedia(
      constraintObj
    );
    let videoStream = document.getElementById("videoStream");
    //Conecta el mediaStreamObj al src de  video Stream
    if ("srcObject" in videoStream) {
      videoStream.srcObject = mediaStreamObj;
    } else {
      videoStream.src = window.URL.createObjectURL(mediaStreamObj);
    }
    //Muestra el video en cuanto lo puede hacer.
    videoStream.onloadedmetadata = videoStream.play();
    return mediaStreamObj;
  } catch (err) {
    console.log(err);
  }
}

async function startStream() {
  const mediaStreamObj = await getStream();
  let mediaRecorder = getInstanceMediaRecorder(mediaStreamObj);
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  changeColorButton("green", start);
  changeColorButton("white", stop);
}
async function stopStream() {
  const mediaStreamObj = await getStream();
  let mediaRecorder = getInstanceMediaRecorder(mediaStreamObj);
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  mediaRecorder.ondataavailable = function (ev) {
    myGifOs.push(ev.data);
  };
  changeColorButton("red", stop);
  changeColorButton("white", start);
}
function changeColorButton(color, id) {
  id.style.background = color;
  //id.className = 'nombre de clase en css
}

// navigator.mediaDevices
//   .getUserMedia(constraintObj)
//   //promesa que captura el media stream
//   .then(function (mediaStreamObj) {
//     //Conecta el mediaStreamObj al src de  video Stream
//     let videoStream = document.getElementById("videoStream");
//     if ("srcObject" in videoStream) {
//       videoStream.srcObject = mediaStreamObj;
//     } else {
//       videoStream.src = window.URL.createObjectURL(mediaStreamObj);
//     }
//     //Muestra el video en cuanto lo puede hacer.
//     videoStream.onloadedmetadata = function (ev) {
//       videoStream.play();
//     };

//     //add listeners for saving video/audio
//     let start = document.getElementById("btnCapturar");
//     let stop = document.getElementById("btnListo");
//     let videoSave = document.getElementById("videoSave");
//     let mediaRecorder = new MediaRecorder(mediaStreamObj);
//     let myGifOs = [];

//     //comienza a grabar
//     start.addEventListener("click", (ev) => {
//       //comienza a grabar

//       mediaRecorder.start();
//       console.log(mediaRecorder.state);
//     });

//     //Deja de grabar
//     stop.addEventListener("click", (ev) => {
//       mediaRecorder.stop();
//       console.log(mediaRecorder.state);
//       //apaga la cámara
//       mediaStreamObj.getTracks()[0].stop();
//     });

//     //Guardar en array mientas hay data disponible:
//     mediaRecorder.ondataavailable = function (ev) {
//       myGifOs.push(ev.data);
//     };

//     //Cuando para guardar en blob
//     mediaRecorder.onstop = (ev) => {
//       let blob = new Blob(myGifOs, { type: "video/mp4;" });
//       // chunks = []; Si uno quisiera blanquear el array
//       let videoURL = window.URL.createObjectURL(blob);
//       videoSave.src = videoURL;
//     };
//   })
//   //Si no funca
//   .catch(function (err) {
//     console.log(err.name, err.message);
//     alert("Tu video no puede ser capturado");
//   });
// }

// let mediaObject = getStream();
