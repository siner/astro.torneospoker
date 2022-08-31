import { formatDate } from "../../lib/utils";

export default function RowTournament({ torneo, casino }) {
  const backgroundColor = torneo.casinos.color;
  let { datestring, hour } = formatDate(torneo.date + " " + torneo.hour);

  return (
    <div className="rowtournament relative flex text-white bg-stone-500 hover:bg-stone-700">
      <div
        className="colorstick"
        style={{ backgroundColor: backgroundColor }}></div>
      <div className="w-full flex flex-col gap-4 lg:flex-row justify-between p-5 py-2 items-center">
        {casino && (
          <div className="casino text-lg lg:text-xs w-100 lg:w-1/12 ml-2">
            <a href={"/casino/" + torneo.casinos.id}>{torneo.casinos.name}</a>
          </div>
        )}
        <div className="price font-bold text-3xl lg:text-xl w-100 lg:w-1/12 text-center lg:text-right">
          {torneo.price && <span>{torneo.price}€</span>}
        </div>

        <div className="name font-bold text-center lg:text-left lg:w-8/12">
          <a
            href={"/torneo/" + torneo.id}
            className="text-2xl lg:text-lg flex flex-col lg:flex-row items-center">
            {torneo.name}
            {torneo.image && (
              <img
                width="100"
                className="ml-4"
                src={torneo.image}
                alt={"Icono " + torneo.name}
              />
            )}
          </a>
        </div>

        <div className="flex flex-col gap-2 text-sm text-center lg:text-right w-100 lg:w-2/12">
          <strong>{datestring}</strong>
          <strong className="text-xl">{hour}</strong>
        </div>
      </div>
    </div>
  );
}
