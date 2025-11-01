export default async function fetchYoutubeVideos(query) {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&maxResults=12&key=${apiKey}`
  );
  const data = await res.json();

  // Get video IDs
  const videoIds = data.items.map((item) => item.id.videoId).join(",");

  // ✅ Call the videos API to get embeddability info
  const detailsRes = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=status,snippet&id=${videoIds}&key=${apiKey}`
  );
  const detailsData = await detailsRes.json();

  // ✅ Only keep videos that can be embedded
  const playableVideos = detailsData.items
    .filter((v) => v.status.embeddable)
    .map((v) => ({
      id: v.id,
      title: v.snippet.title,
      thumbnail: v.snippet.thumbnails.medium.url,
    }));

  return playableVideos;
}
