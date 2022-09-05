export default function CardEvento({ evento }) {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="text-center p-8 bg-slate-300 hover:bg-slate-400">
        <a href={"/evento/" + evento.slug}>
          <img className="mx-auto h-14" src={evento.logo} alt={evento.name} />
        </a>
      </div>
      <div className="px-6 py-4">
        <a href={"/evento/" + evento.slug} className="font-bold mb-2">
          {evento.name}
        </a>
      </div>
    </div>
  );
}
