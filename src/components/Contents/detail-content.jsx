import { useEffect } from "react";
import { useLocation } from "react-router";
import { fetchData } from "../../utils/api";

export default function DetailContent() {
  const location = useLocation();
  const { channelTitle, description, publishedAt, title } =
    location.state.video.snippet;

  const [relatedVideo, setRelatedVideo] = [];

  useEffect(() => {
    async function getRelatedVideos() {
      const result = fetchData("search", {
        part: "snippet",
        relatedToVideoId: location.state.video.id.videoId,
      });
      setRelatedVideo(result);
    }
    getRelatedVideos();
  });
  return (
    <div>
      <div>{channelTitle}</div>
      <div>{description}</div>
      <div>{publishedAt}</div>
      <div>{title}</div>
      <div>{relatedVideo}</div>
    </div>
  );
}
