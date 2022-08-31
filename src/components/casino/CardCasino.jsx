export default function CardCasino({ casino }) {
  const bg = casino.color;

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="text-center p-10" style={{ backgroundColor: bg }}>
        <img
          className="mx-auto"
          src={casino.logo}
          alt={casino.name}
          width="150"
        />
      </div>
      <div className="px-6 py-4">
        <a href={"/casino/" + casino.id} className="font-bold text-xl mb-2">
          {casino.name}
        </a>
        <p className="text-gray-700 text-base">{casino.address}</p>
      </div>
    </div>
  );
}
