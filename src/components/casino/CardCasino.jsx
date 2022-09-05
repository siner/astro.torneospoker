export default function CardCasino({ casino }) {
  const bg = casino.color;

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="text-center p-8" style={{ backgroundColor: bg }}>
        <img className="mx-auto h-14" src={casino.logo} alt={casino.name} />
      </div>
      <div className="px-6 py-4">
        <a href={"/casino/" + casino.slug} className="font-bold mb-2">
          {casino.name}
        </a>
        <p className="text-gray-700 text-sm">{casino.address}</p>
      </div>
    </div>
  );
}
