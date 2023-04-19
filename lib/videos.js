import videoData from "../data/videos.json";

export const getCommonVideos = async (url) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const BASE_URL = `https://youtube.googleapis.com/youtube/v3`;

    const response = await fetch(`${BASE_URL}/${url}&key=${YOUTUBE_API_KEY}`);

    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${searchQuery}&key=${YOUTUBE_API_KEY}

    const data = await response.json();

    console.log({ data });

    if (data?.error) {
      console.error("Youtube API error", data.error);
      return [];
    }

    return data?.items.map((item) => {
      const id = item.id?.videoId || item.id;
      return {
        title: item.snippet.title,
        id,
        imgUrl: item.snippet.thumbnails.high.url,
      };
    });
  } catch (error) {
    console.error("Something went wrong with video library", error);
    return [];
  }
};

export const getVideos = (searchQuery) => {
  const URL = `search?part=snippet&type=video&maxResults=25&q=${searchQuery}`;
  return getCommonVideos(URL);
};

export const getPopularVideos = (searchQuery) => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US`;
  return getCommonVideos(URL);
};
