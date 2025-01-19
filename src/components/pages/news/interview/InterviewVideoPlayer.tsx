interface VideoPlayerProps {
  videoUrl?: string;
}

export const InterviewVideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const getYouTubeVideoId = (url?: string): string | null => {
    console.log(url);
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url?.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  const videoId = getYouTubeVideoId(videoUrl);

  if (!videoId) {
    return;
  }

  return (
    <div className="relative w-full aspect-[25/10] overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      />
    </div>
  );
};