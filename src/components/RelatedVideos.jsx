import { useYoutubeApi } from "context/YoutubeApiContext";
import { useQuery } from "react-query";
import VideoCard from "./VideoCard/VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard video={video} key={video.id} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
