import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "utils/api";
import vidoesData from "assets/videos";
import VideoCard from "components/VideoCard/video-card";

export default function ContentsList() {
  const { keyword } = useParams();
  const [videos, setVideos] = useState(vidoesData.items);
  // useEffect(() => {
  //   if (keyword) {
  //     async function searchParams() {
  //       const result = await fetchData("search", {
  //         part: "snippet",
  //         q: keyword,
  //       });
  //       setVideos(result.items);
  //     }
  //     searchParams(keyword);
  //   } else {
  //     async function getVidoes() {
  //       const result = await fetchData("videos", {
  //         part: "snippet",
  //         chart: "mostPopular",
  //       });
  //       setVideos(result.items);
  //     }
  //     getVidoes();
  //   }
  // }, [keyword]);
  return (
    <>
      <div className="content">
        <ul className="flex flex-wrap gap-4">
          {videos.map((video, index) => {
            return <VideoCard key={index} video={video} />;
          })}
        </ul>
      </div>
    </>
  );
}
