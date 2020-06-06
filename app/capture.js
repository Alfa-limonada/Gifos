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

//Empieza a grabar 

async function startStream() {
  const mediaStreamObj = await getStream();
  let mediaRecorder = getInstanceMediaRecorder(mediaStreamObj);
  mediaRecorder.start();
  console.log(mediaRecorder.state);  
}

//Para de grabar
async function stopStream() {
  const mediaStreamObj = await getStream();
  let mediaRecorder = getInstanceMediaRecorder(mediaStreamObj);
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  mediaRecorder.ondataavailable = function (ev) {
    myGifOs.push(ev.data);
  };
}
