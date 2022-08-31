import { formatDate } from "../../lib/utils";

export default function RowTournament({ torneo, casino }) {
  const backgroundColor = torneo.casinos.color;
  let { datestring, hour } = formatDate(torneo.date + " " + torneo.hour);

  return (
    <div className="rowtournament relative flex text-white bg-stone-500 hover:bg-stone-700">
      <div
        className="colorstick"
        style={{ backgroundColor: backgroundColor }}></div>
      <div className="w-full flex flex-col gap-4 md:flex-row justify-between p-5 py-2 items-center">
        {casino && (
          <div className="casino text-lg md:text-xs w-100 md:w-1/12 ml-2">
            <a href={"/casino/" + torneo.casinos.id}>{torneo.casinos.name}</a>
          </div>
        )}
        <div className="price font-bold text-2xl md:text-xl w-100 md:w-1/12 text-center md:text-right">
          {torneo.price && <span>{torneo.price}€</span>}
        </div>

        <div className="name text-center md:text-left md:w-8/12">
          <a
            href={"/torneo/" + torneo.id}
            className="text-xl md:text-lg flex flex-col md:flex-row items-center">
            {torneo.image && (
              <img
                width="100"
                className="mr-4 hidden md:inline"
                src={torneo.image}
                alt={"Icono " + torneo.name}
              />
            )}
            {torneo.name}
          </a>
        </div>

        <div className="flex md:flex-col space-x-2 gap-2 text-sm items-center md:items-end text-center md:text-right w-100 md:w-2/12">
          <p>{datestring}</p>
          <p className="text-xl">{hour}</p>
        </div>
      </div>
    </div>
  );
}
