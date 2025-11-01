"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import fetchYoutubeVideos from "@/src/utils/fetchYoutubeVideos";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

export default function VideoList() {
  const params = useParams();
  const searchParams = useSearchParams();

  const id = params.id as string;
  const query = searchParams.get("q") || id;

  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchYoutubeVideos(query);
        setVideos(data || []);
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
      setLoading(false);
    }

    load();
  }, [query]);

  if (loading) {
    return <p className="p-8 text-xl">Loading videos...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{id} Videos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((vid) => (
          <a
            key={vid.id}
            href={`/watch/${vid.id}`}
            className="bg-white p-4 shadow rounded"
          >
            <img src={vid.thumbnail} alt={vid.title} />
            <h2 className="mt-2 font-semibold">{vid.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}
