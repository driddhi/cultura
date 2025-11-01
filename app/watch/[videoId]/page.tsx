export default async function WatchPage({
  params,
}: {
  params: Promise<{ videoId: string }>;
}) {
  const { videoId } = await params;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Watching Video</h1>

      <iframe
        className="w-full h-[500px] rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
