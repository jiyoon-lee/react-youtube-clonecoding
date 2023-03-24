import { useNavigate } from "react-router";
import { formatAgo } from "utils/date";
export default function VideoCard({ video, type }) {
  const navigate = useNavigate();
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  const isList = type === "list";
  return (
    <>
      <li
        className={isList ? "flex gap-1 m-2" : ""}
        onClick={() => {
          navigate(`/videos/watch/${video.id}`, { state: { video } });
        }}
        key={video.id}
      >
        <img
          className={isList ? "w-60 mr-2" : "w-full"}
          src={thumbnails.high.url}
          alt="thumbnail-img"
        />
        <div>
          <h2 className="font-semibold my-2 line-clamp-2">{title}</h2>
          <h3 className="text-sm opacity-80">{channelTitle}</h3>
          <h3 className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</h3>
        </div>
      </li>
    </>
  );
}
