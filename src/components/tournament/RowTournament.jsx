import { formatDate, getMobileDate } from "../../lib/utils";

export default function RowTournament({ torneo, casino }) {
  const backgroundColor = torneo.casinos.color;
  let { datestring, hour } = formatDate(torneo.date + " " + torneo.hour);
  let mobiledate = getMobileDate(torneo.date);

  return (
    <div className="rowtournament relative text-white bg-stone-500 hover:bg-stone-700">
      <div
        className="colorstick"
        style={{ backgroundColor: backgroundColor }}></div>
      {casino && (
        <div className="casino md:hidden text-xs w-full ml-4 pt-1 text-gray-300">
          {torneo.casinos.name}
        </div>
      )}
      <div className="w-full flex gap-4 justify-between p-2 pt-0 md:pt-2 items-center space-x-1">
        {casino && (
          <div className="casino hidden md:block text-xs w-1/12 ml-2">
            <a href={"/casino/" + torneo.casinos.id}>{torneo.casinos.name}</a>
          </div>
        )}
        <div className="price font-bold text-xs md:text-lg w-1/12 text-right">
          {torneo.price && <span>{torneo.price}€</span>}
        </div>

        <div className="name text-left w-7/12">
          <a
            href={"/torneo/" + torneo.id}
            className="text-sm md:text-lg flex flex-col md:flex-row md:items-center">
            {torneo.image && (
              <img
                className="mr-4 hidden md:inline w-20 max-h-10"
                src={torneo.image}
                alt={"Icono " + torneo.name}
              />
            )}
            {torneo.name}
          </a>
        </div>

        <div className="md:space-x-2 md:gap-2 text-xs items-end text-right w-3/12">
          <p className="hidden sm:block">{datestring}</p>
          <p className="sm:hidden">{mobiledate}</p>
          <p>{hour}</p>
        </div>
      </div>
    </div>
  );
}
