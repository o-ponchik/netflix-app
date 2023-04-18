import videoData from "../data/videos.json";

export const getVideos = () => {
  return videoData.items.map((item) => {
    return {
      title: item.snippet.title,
      id: item?.id?.videoId,
      imgUrl: item.snippet.thumbnails.high.url,
    };
  });
};
