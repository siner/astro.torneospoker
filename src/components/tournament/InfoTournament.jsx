import { localeDateString } from "../../lib/utils";

export default function InfoTournament({ torneo }) {
  let bg = torneo.casinos.color;
  const date = new Date(torneo.date);

  return (
    <div
      className="w-100 flex justify-between text-white bg-slate-500 p-5 items-center"
      style={{ backgroundColor: bg }}>
      <div className="flex gap-10 items-center">
        <div className="casino">
          <a href={"/casino/" + torneo.casinos.id}>
            <img
              src={torneo.casinos.logo}
              title={torneo.casinos.name}
              width="80"
            />
          </a>
        </div>
        <div className="flex flex-col text-xs w-60">
          <div>{torneo.casinos.name}</div>
          <div>{localeDateString(date)}</div>
          <div>
            <strong>{torneo.hour}</strong>
          </div>
        </div>
        <div className="name">
          <a
            href={"/torneo/" + torneo.id}
            className="underline decoration-2 underline-offset-2">
            {torneo.name}
          </a>
        </div>
      </div>
      {torneo.price && <div className="price font-bold">{torneo.price}€</div>}
    </div>
  );
}
