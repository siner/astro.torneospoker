import { formatDate, getMobileDate, getTextColor } from "../../lib/utils";

export default function RowTournament(props) {
  const { torneo, casino } = props;
  const backgroundColor = torneo.casinos.color;
  const textColor = getTextColor(backgroundColor);
  let { datestring, hour } = formatDate(torneo.date + " " + torneo.hour);
  let mobiledate = getMobileDate(torneo.date);

  return (
    <div
      className="rowtournament relative"
      style={{ backgroundColor: backgroundColor, color: textColor }}>
      {casino && (
        <div className="casino md:hidden text-xs w-full ml-3 pt-1">
          {torneo.casinos.name}
        </div>
      )}
      <div className="w-full flex gap-4 justify-between p-2 pt-0 md:pt-2 items-center space-x-1">
        {casino && (
          <div className="casino text-xs w-2/12 md:w-1/12 ml-2">
            <a href={"/casino/" + torneo.casinos.slug}>
              <img
                className="mr-4 w-24"
                src={torneo.casinos.logo}
                alt={"Logo " + torneo.casinos.name}
              />
            </a>
          </div>
        )}

        <div className="name text-left w-7/12 md:w-8/12">
          <a
            href={"/torneo/" + torneo.id}
            className="text-sm md:text-lg flex flex-col md:flex-row md:items-center">
            {torneo.image && (
              <img
                className="mr-4 hidden md:inline max-h-10"
                src={torneo.image}
                alt={"Icono " + torneo.name}
              />
            )}
            {torneo.name}
          </a>
        </div>

        <div className="md:space-x-2 md:gap-2 text-xs items-end text-right w-2/12 md:font-bold">
          <p className="hidden sm:block">{datestring}</p>
          <p className="sm:hidden">{mobiledate}</p>
          <p>{hour}</p>
        </div>
        <div className="price font-bold text-xs md:text-lg w-1/12 text-right">
          {torneo.price && <span>{torneo.price}€</span>}
        </div>
      </div>
    </div>
  );
}
