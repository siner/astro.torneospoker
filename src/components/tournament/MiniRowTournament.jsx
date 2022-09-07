import { formatDate, getMobileDate, getTextColor } from "../../lib/utils";

export default function RowTournament(props) {
  const { torneo, casino, event } = props;
  const backgroundColor = torneo.casinos.color;
  const textColor = getTextColor(backgroundColor);
  let datetorneo = new Date(torneo.date);
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  let opacity = datetorneo < today ? "0.7" : "1";

  return (
    <div
      className="rowtournament shadow-lg"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        opacity: opacity,
      }}>
      <div className="w-full flex gap-2 justify-between p-1 items-start">
        <div className="name w-full text-left text-xs">
          <a href={"/torneo/" + torneo.id}>{torneo.name}</a>
        </div>
      </div>
    </div>
  );
}
