export default function RowTournament({ cashgame }) {
  return (
    <div className="rowcashgame flex text-white bg-stone-500">
      <div className="w-full flex flex-col gap-4 lg:flex-row justify-between p-5 py-2 items-center">
        <div className="name text-2xl lg:text-lg font-bold text-center lg:text-left lg:w-6/12">
          {cashgame.name}
        </div>
        <div className="flex flex-col gap-2 text-sm text-center lg:text-right w-100 lg:w-3/12">
          <strong>{cashgame.blinds}</strong>
        </div>
        <div className="prize font-bold text-md w-100 lg:w-3/12 text-center lg:text-right">
          {cashgame.buyins}
        </div>
      </div>
    </div>
  );
}
