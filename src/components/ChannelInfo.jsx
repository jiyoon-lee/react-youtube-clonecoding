import React from "react";
import { useYoutubeApi } from "context/YoutubeApiContext";
import { useQuery } from "react-query";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    <div className="flex gap-3 items-center">
      {url && <img src={url} alt={name} className="rounded-full w-8 h-8" />}
      <p className="text-xl font-bold">{name}</p>
    </div>
  );
}
