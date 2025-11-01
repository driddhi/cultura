interface WatchPageParams {
  videoId: string;
}

export default function WatchPage({ params }: { params: WatchPageParams }) {
  const { videoId } = params;

  return (
    <div className="p-8">
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      ></iframe>
    </div>
  );
}
