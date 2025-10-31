import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchVideos = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: "snippet",
      q: query,
      key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
      maxResults: 10,
      type: "video"
    },
  });
  return data.items;
};
