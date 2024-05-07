// StreamComponent.js
import React, { useState, useEffect } from 'react';
import AgoraRTC from 'AgoraRTC';

const APP_ID = "c7275f9b02fa4ebd99fcf1b455fef0ff";
const TOKEN = "007eJxTYIgziD3bIZAW4bbHiu1J4Q7tuVqlnafu5B3t41JaVpL5NFGBIdncyNw0zTLJwCgt0SQ1KcXSMi05zTDJxNQ0LTXNIC2NXc0yrSGQkeH5yhesjAwQCOKzMORkpqUyMAAADIEfPw==";
const CHANNEL = 'life';

const StreamComponent = () => {
  const [localTracks, setLocalTracks] = useState([]);
  const [remoteUsers, setRemoteUsers] = useState({});
  const [joinState, setJoinState] = useState(false);
  const [micState, setMicState] = useState(true);  // True means microphone is on
  const [cameraState, setCameraState] = useState(true);  // True means camera is on

  const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

  const joinStream = async () => {
    client.on("user-published", handleUserJoined);
    client.on("user-left", handleUserLeft);

    const UID = await client.join(APP_ID, CHANNEL, TOKEN, null);
    const tracks = await AgoraRTC.createMicrophoneAndCameraTracks();
    setLocalTracks(tracks);

    const player = `<div class="video-container" id="user-container-${UID}">
                      <div class="video-player" id="user-${UID}"></div>
                    </div>`;
    document.getElementById("video-streams").insertAdjacentHTML("beforeend", player);
    tracks[1].play(`user-${UID}`);

    await client.publish(tracks);
    setJoinState(true);
  };

  const handleUserJoined = async (user, mediaType) => {
    setRemoteUsers(prevUsers => ({ ...prevUsers, [user.uid]: user }));
    await client.subscribe(user, mediaType);

    if (mediaType === "video") {
      let player = `<div class="video-container" id="user-container-${user.uid}">
                      <div class="video-player" id="user-${user.uid}"></div> 
                    </div>`;
      document.getElementById("video-streams").insertAdjacentHTML("beforeend", player);
      user.videoTrack.play(`user-${user.uid}`);
    }

    if (mediaType === "audio") {
      user.audioTrack.play();
    }
  };

  const handleUserLeft = (user) => {
    const updatedUsers = { ...remoteUsers };
    delete updatedUsers[user.uid];
    setRemoteUsers(updatedUsers);
    document.getElementById(`user-container-${user.uid}`).remove();
  };

  const leaveStream = async () => {
    localTracks.forEach(track => {
      track.stop();
      track.close();
    });

    await client.leave();
    setJoinState(false);
    document.getElementById("video-streams").innerHTML = "";
  };

  const toggleMic = async () => {
    const newMicState = !micState;
    setMicState(newMicState);
    if (localTracks[0]) {
      await localTracks[0].setMuted(!newMicState);
    }
  };

  const toggleCamera = async () => {
    const newCameraState = !cameraState;
    setCameraState(newCameraState);
    if (localTracks[1]) {
      await localTracks[1].setMuted(!newCameraState);
    }
  };

  return (
    <div>
      <button onClick={joinStream} style={{ display: joinState ? 'none' : 'block' }}>Join Stream</button>

      <div id="stream-wrapper" style={{ display: joinState ? 'block' : 'none' }}>
        <div id="video-streams"></div>
        <div id="stream-controls">
          <button onClick={leaveStream}>Leave Stream</button>
          <button onClick={toggleMic}>{micState ? 'Mic On' : 'Mic Off'}</button>
          <button onClick={toggleCamera}>{cameraState ? 'Camera On' : 'Camera Off'}</button>
        </div>
      </div>
    </div>
  );
};

export default StreamComponent;
