import fs from "fs";
import path from "path";
import { use } from "react";

export default function DanceHistory({
  params,
}: {
  params: Promise<{ style: string }>;
}) {
  // ✅ Unwrap params using React.use()
  const { style } = use(params);

  const filePath = path.join(
    process.cwd(),
    "src/data/dances",
    `${style}.json`
  );

  // ✅ Graceful error handling if no JSON exists
  if (!fs.existsSync(filePath)) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-500">Dance Style Not Found</h1>
        <p className="mt-2 text-gray-600">
          We couldn't find data for this dance form.
        </p>
        <a
          href="/dance"
          className="mt-4 inline-block px-4 py-2 bg-orange-500 text-white rounded-lg"
        >
          ← Back to All Dance Forms
        </a>
      </div>
    );
  }

  const danceData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{danceData.name} – History</h1>
      <p className="mt-4 leading-relaxed text-gray-700">{danceData.history}</p>

      <a
        href={`/dance/${style}`}
        className="mt-6 inline-block text-blue-500 underline"
      >
        ← Back
      </a>
    </div>
  );
}
