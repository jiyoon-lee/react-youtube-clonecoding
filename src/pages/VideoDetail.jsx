import ChannelInfo from "components/ChannelInfo";
import RelatedVideos from "components/RelatedVideos";
import React from "react";
import { useLocation } from "react-router";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          title={video.id}
          frameborder="0"
        />
        <div className="m-5">
          <h2 className="text-3xl font-bold my-3">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <div className="my-4 p-5 bg-slate-600 rounded-lg">{description}</div>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
