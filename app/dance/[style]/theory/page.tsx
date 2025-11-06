import fs from "fs";
import path from "path";
import { use } from "react";

export default function DanceTheory({ params }: { params: Promise<{ style: string }> }) {
  const { style } = use(params); // ✅ Unwrap params

  const filePath = path.join(process.cwd(), "src/data/dances", `${style}.json`);

  if (!fs.existsSync(filePath)) {
    return (
      <div className="p-8">
        <h1 className="text-2xl text-red-500">Dance Style Not Found</h1>
        <a href="/dance" className="text-blue-600 underline">← Go Back</a>
      </div>
    );
  }

  const danceData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{danceData.name} – Theory</h1>
      <p className="text-gray-600 mt-4">
        Explore the mudras, gharanas, rhythm (taal), and artistic concepts of {danceData.name}.
      </p>

      <ul className="mt-6 space-y-3">
        {danceData.theory?.map((topic: string, idx: number) => (
          <li key={idx} className="p-4 bg-white shadow rounded-lg">
            • {topic}
          </li>
        ))}
      </ul>

      <a href={`/dance/${style}`} className="mt-6 inline-block text-blue-500 underline">← Back</a>
    </div>
  );
}
