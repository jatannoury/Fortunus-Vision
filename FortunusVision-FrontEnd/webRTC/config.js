import {
  ScreenCapturePickerView,
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals,
} from "react-native-webrtc";
let mediaConstraints = {
  audio: true,
  video: {
    frameRate: 30,
    facingMode: "user",
  },
};
let localMediaStream;
let isVoiceOnly = true;

try {
  const mediaStream = await mediaDevices.getUserMedia(mediaConstraints);

  if (isVoiceOnly) {
    let videoTrack = await mediaStream.getVideoTracks()[0];
    videoTrack.enabled = false;
  }

  localMediaStream = mediaStream;
} catch (err) {
  console.log(err);
}
let peerConnection = new RTCPeerConnection(peerConstraints);

peerConnection.addEventListener("connectionstatechange", (event) => {
  switch (peerConnection.connectionState) {
    case "closed":
      // You can handle the call being disconnected here.

      break;
  }
});
peerConnection.addEventListener("icecandidate", (event) => {
  // When you find a null candidate then there are no more candidates.
  // Gathering of candidates has finished.
  if (!event.candidate) {
    return;
  }

  // Send the event.candidate onto the person you're calling.
  // Keeping to Trickle ICE Standards, you should send the candidates immediately.
});

peerConnection.addEventListener("icecandidateerror", (event) => {
  // You can ignore some candidate errors.
  // Connections can still be made even when errors occur.
});

peerConnection.addEventListener("iceconnectionstatechange", (event) => {
  switch (peerConnection.iceConnectionState) {
    case "connected":
    case "completed":
      // You can handle the call being connected here.
      // Like setting the video streams to visible.

      break;
  }
});

peerConnection.addEventListener("negotiationneeded", (event) => {
  // You can start the offer stages here.
  // Be careful as this event can be called multiple times.
});

peerConnection.addEventListener("signalingstatechange", (event) => {
  switch (peerConnection.signalingState) {
    case "closed":
      // You can handle the call being disconnected here.

      break;
  }
});

peerConnection.addEventListener("addstream", (event) => {
  // Grab the remote stream from the connected participant.
  remoteMediaStream = event.stream;
});

// Add our stream to the peer connection.
peerConnection.addStream(localMediaStream);
