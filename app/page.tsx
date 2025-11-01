import Link from "next/link";

const categories = [
  { id: "kathak", name: "Kathak", query: "kathak dance classical india" },
  { id: "bharatanatyam", name: "Bharatanatyam", query: "bharatanatyam classical dance performance" },
  { id: "folk", name: "Indian Folk", query: "indian folk dance garba bhangra lavani" },
  { id: "rabindra", name: "Rabindra Nritya", query: "rabindra nritya dance tagore" },
];


export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-amber-800">
        Discover Indian Dance Forms
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/video/${cat.id}?q=${encodeURIComponent(cat.query)}`}
            className="p-6 bg-white shadow rounded-lg border hover:scale-105 transition"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
