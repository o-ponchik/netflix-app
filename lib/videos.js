import videoData from "../data/videos.json";

export const getVideos = async () => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=desney%20trailer&key=[YOUR_API_KEY]

  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=disney%20trailer&key=${YOUTUBE_API_KEY}`
  );

  const data = await response.json();

  return data?.items.map((item) => {
    return {
      title: item.snippet.title,
      id: item?.id?.videoId,
      imgUrl: item.snippet.thumbnails.high.url,
    };
  });
};
