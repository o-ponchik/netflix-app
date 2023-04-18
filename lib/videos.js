import videoData from "../data/videos.json";

export const getVideos = async (searchQuery) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${searchQuery}&key=${YOUTUBE_API_KEY}`
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
