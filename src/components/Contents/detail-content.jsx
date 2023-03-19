import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchData } from "utils/api";
import vidoesData from "assets/videos";
import VideoCard from "components/VideoCard/video-card";

import { transPublishedAt } from "utils/filter";

export default function DetailContent() {
  transPublishedAt();
  const location = useLocation();
  const { channelTitle, description, publishedAt, title } =
    location.state.video.snippet;

  const [relatedVideo, setRelatedVideo] = useState([]);
  const videoId = location.state.video.id?.videoId || location.state.video.id;
  const api = `https://www.youtube.com/embed/${videoId}`;

  useEffect(() => {
    async function getRelatedVideos() {
      const result = await fetchData("search", {
        part: "snippet",
        type: "video",
        relatedToVideoId: videoId,
      });
      setRelatedVideo(result.items);
    }
    getRelatedVideos();
  });
  return (
    <>
      <div className="flex">
        <div class="content basis-4/5">
          <iframe
            width="560"
            height="315"
            src={api}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div>{channelTitle}</div>
          <div>{description}</div>
          <div>{publishedAt}</div>
          <div>{title}</div>
        </div>
        <div class="relative-video basis-1/5">
          {relatedVideo.map((video) => (
            <VideoCard video={video}></VideoCard>
          ))}
        </div>
      </div>
    </>
  );
}
