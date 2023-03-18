import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/api";

export default function ContentsList() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    if (keyword) {
      async function searchParams() {
        const result = await fetchData("search", {
          part: "snippet",
          q: keyword,
        });
        setVideos(result.items);
      }
      searchParams(keyword);
    } else {
      async function getVidoes() {
        const result = await fetchData("videos", {
          part: "snippet",
          chart: "mostPopular",
        });
        setVideos(result.items);
      }
      getVidoes();
    }
  }, [keyword]);
  return (
    <>
      <div className="content">
        <ul className="card-list">
          {videos.map((video) => {
            const id = video.id?.videoId || video.id;
            const { thumbnails, title, channelTitle, publishedAt } =
              video.snippet;
            return (
              <li
                onClick={() => {
                  navigate(`/videos/watch/${id}`, { state: { video } });
                }}
                className="card-item detail"
                key={id}
              >
                <img src={thumbnails.default.url} alt="thumbnail-img" />
                <div className="card-item__desc detail">
                  <h2>{title}</h2>
                  <h3>{channelTitle}</h3>
                  <h3>{publishedAt}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
