import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Audio() {
  return (
    <div>
      <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls className="w-full"/>
    </div>
  );
}
