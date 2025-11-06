import fs from "fs";
import path from "path";
import { use } from "react";
import Link from "next/link";

export default function TutorialsPage({
  params,
}: {
  params: Promise<{ style: string }>;
}) {
  // ✅ Unwrap params (important for Next.js 15+)
  const { style } = use(params);

  const filePath = path.join(
    process.cwd(),
    "src/data/dances",
    `${style}.json`
  );

  // ✅ Safe fallback if JSON file does not exist
  if (!fs.existsSync(filePath)) {
    return (
      <div className="p-8">
        <h1 className="text-2xl text-red-500">Dance Style Not Found</h1>
        <Link href="/dance" className="text-blue-600 underline mt-4 inline-block">
          ← Back to Dance Forms
        </Link>
      </div>
    );
  }

  // ✅ Load content from JSON
  const danceData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{danceData.name} – Tutorials</h1>
      <p className="text-gray-600 mt-3">
        Explore structured lessons for {danceData.name}. Choose a topic below.
      </p>

      {/* Tutorials List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {danceData.tutorials?.map((topic: string, idx: number) => (
          <Link
            key={idx}
            href={`/dance/${style}/tutorials/${topic.toLowerCase().replace(/\s+/g, "-")}`}
            className="p-5 bg-white rounded-lg shadow hover:scale-[1.02] transition"
          >
            <h2 className="font-semibold text-lg">{topic}</h2>
            <p className="text-sm text-gray-500">Click to explore →</p>
          </Link>
        ))}
      </div>

      <Link href={`/dance/${style}`} className="mt-6 inline-block text-blue-600 underline">
        ← Back to {danceData.name}
      </Link>
    </div>
  );
}
