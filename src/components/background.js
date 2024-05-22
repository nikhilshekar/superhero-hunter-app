import backgroundVideo from "../assets/background_video.mp4";

function BackgroundVideo() {
  return (
    <video autoPlay muted loop id="myVideo">
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  );
}

export default BackgroundVideo;
