import { formatDate, getMobileDate, getTextColor } from "../../lib/utils";

export default function RowTournament(props) {
  const { torneo, casino, event } = props;
  const backgroundColor = torneo.casinos.color;
  const textColor = getTextColor(backgroundColor);
  let { datestring, hour } = formatDate(torneo.date + " " + torneo.hour);

  return (
    <div
      className="rowtournament shadow-lg"
      style={{ backgroundColor: backgroundColor, color: textColor }}>
      <div className="text-xs ml-5 mr-2 pt-1 mb-2 flex justify-between">
        {casino && <div className="casino">{torneo.casinos.name}</div>}
        <div className="font-bold text-right grow">
          {datestring} - {hour}
        </div>
      </div>
      <div className="w-full flex gap-4 justify-between p-2 pt-0 md:pt-2 items-center space-x-1">
        {casino && (
          <div className="casino hidden md:inline text-xs w-2/12 md:w-1/12 ml-2 mb-2">
            <a href={"/casino/" + torneo.casinos.slug}>
              <img
                className="mr-4 w-24"
                src={torneo.casinos.logo}
                alt={"Logo " + torneo.casinos.name}
              />
            </a>
          </div>
        )}

        <div className="name w-8/12 flex items-center text-sm md:text-lg">
          {event && torneo.events && (
            <a href={"/evento/" + torneo.events.slug}>
              <img
                className="mr-4 w-16"
                src={torneo.events.logo}
                alt={"Icono " + torneo.events.name}
              />
            </a>
          )}
          <a href={"/torneo/" + torneo.id}>{torneo.name}</a>
        </div>

        <div className="price font-bold text-lg md:text-2xl w-2/12 text-right">
          <p>
            {torneo.price && torneo.price > 0 && <span>{torneo.price}€</span>}
          </p>
        </div>
      </div>
    </div>
  );
}
