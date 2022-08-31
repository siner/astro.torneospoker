export default function RowTournament({ cashgame }) {
  return (
    <div className="rowcashgame flex text-white bg-stone-500">
      <div className="w-full flex gap-4 justify-between p-5 py-2 items-center text-sm">
        <div className="text-left w-6/12">{cashgame.name}</div>
        <div className="text-right w-2/12">
          <strong>{cashgame.blinds}</strong>
        </div>
        <div className="w-4/12 text-right">{cashgame.buyins}</div>
      </div>
    </div>
  );
}
