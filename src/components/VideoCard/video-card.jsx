import { useNavigate } from "react-router";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const id = video.id?.videoId || video.id;
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  return (
    <>
      <li
        onClick={() => {
          navigate(`/videos/watch/${id}`, { state: { video } });
        }}
        key={id}
        className="max-sm:flex"
      >
        <img
          className="rounded-md w-[390px] h-[220px] object-cover"
          src={thumbnails.high.url}
          alt="thumbnail-img"
        />
        <div className="px-1 pt-1 w-[390px]">
          <h2>{title}</h2>
          <h3>{channelTitle}</h3>
          <h3>{publishedAt}</h3>
        </div>
      </li>
    </>
  );
}
