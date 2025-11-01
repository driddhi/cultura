export default async function fetchYoutubeVideos(query) {
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  if (!API_KEY) {
    console.error("❌ YouTube API KEY MISSING");
    return [];
  }

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
      query
    )}&maxResults=12&key=${API_KEY}`
  );

  const data = await res.json();

  if (!data.items) return [];

  return data.items.map((item) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.high.url,
  }));
}
