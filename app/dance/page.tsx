import Link from "next/link";

const danceStyles = [
  { id: "kathak", name: "Kathak" },
  { id: "bharatanatyam", name: "Bharatanatyam" },
  { id: "odissi", name: "Odissi" },
  { id: "kuchipudi", name: "Kuchipudi" },
  { id: "mohiniyattam", name: "Mohiniyattam" },
  { id: "manipuri", name: "Manipuri" },
  { id: "kathakali", name: "Kathakali" },
  { id: "sattriya", name: "Sattriya" },
];
const otherStyles = [
  { id: "folk dance", name: "Indian Folk Dance" },
  { id: "rabindra nritya", name: "Rabindra Nritya" },
  { id: "contemporary dance", name: "Contemporary Indian Dance" },
  { id: "fusion dance", name: "Fusion Dance Forms" },
  { id: "bollywood dance", name: "Bollywood Dance Styles" },
];


export default function DancePage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Explore Indian Classical Dance Forms</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {danceStyles.map((dance) => (
          <Link
            key={dance.id}
            href={`/dance/${dance.id}`}
            className="p-6 bg-white shadow border hover:scale-105 transition rounded-lg"
          >
            {dance.name}
          </Link>
        ))}
      </div>
        <div className="mt-12">
        <h1 className="text-4xl font-bold mb-6">Explore Other Dance Forms</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {otherStyles.map((dance) => (
            <Link
              key={dance.id}
              href={`/dance/${dance.id}`}
              className="p-6 bg-white shadow border hover:scale-105 transition rounded-lg"
            >
              {dance.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
