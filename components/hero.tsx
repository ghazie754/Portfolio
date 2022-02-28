export default function () {
  return (
    <div className="cursor">
      <div className="cursor-media">
        {video.map(() => (
          <video
            src="videos/websites.mp4"
            preload="auto"
            autoPlay={true}
            muted={true}
            loop={true}
            id="websites"
          ></video>
        ))}
      </div>
    </div>
  );
}
