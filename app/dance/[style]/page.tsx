import fs from "fs";
import path from "path";
import Link from "next/link";
import { use } from "react"; // ✅ new React hook for unwrapping Promises in RSC

export default function DanceOverview({ params }: { params: Promise<{ style: string }> }) {
  // ✅ unwrap params using React.use()
  const { style } = use(params);

  try {
    //const filePath = path.join(process.cwd(), "src/data/dances", `${style}.json`);

    // if (!fs.existsSync(filePath)) {
    //   throw new Error("Dance style not found");
    // }

    //const danceData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    return (
      <div className="p-8">
        {/* <h1 className="text-4xl font-bold">{danceData.name}</h1>
        <p className="text-gray-600 mt-3">{danceData.description}</p> */}

        {/* Sub Navigation */}
        <div className="flex gap-4 mt-6">
          <Link
            href={`/dance/${style}/history`}
            className="px-4 py-2 bg-orange-100 hover:bg-orange-200 rounded-lg"
          >
            History
          </Link>
          <Link
            href={`/dance/${style}/theory`}
            className="px-4 py-2 bg-orange-100 hover:bg-orange-200 rounded-lg"
          >
            Theory
          </Link>
          <Link
            href={`/dance/${style}/tutorials`}
            className="px-4 py-2 bg-orange-100 hover:bg-orange-200 rounded-lg"
          >
            Tutorials
          </Link>
          <Link
            href={`/video/${style}`}
            className="px-4 py-2 bg-orange-100 hover:bg-orange-200 rounded-lg">
            Videos
          </Link>        
        </div>
         <a href={`/dance/${style}`} className="mt-6 inline-block text-blue-500 underline">← Back</a>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold text-red-600">Dance Form Not Found</h1>
        <p className="text-gray-600 mt-2">
          The requested dance style does not exist or isn't added yet.
        </p>
        <Link
          href="/dance"
          className="mt-4 inline-block px-4 py-2 bg-orange-500 text-white rounded-lg"
        >
          ← Back to All Dance Forms
        </Link>
      </div>
    );
  }
}
