export default function RowCasino({ casino }) {
  const backgroundColor = casino.color;

  return (
    <div class="rowcasino flex text-white bg-stone-500 hover:bg-stone-700">
      <div
        className="colorstick"
        style={{ backgroundColor: backgroundColor }}></div>
      <div class="w-full flex flex-col gap-4 lg:flex-row justify-between p-5 py-2 items-center">
        <div class="font-bold text-3xl lg:text-xl w-100 text-center lg:text-right">
          {casino.name}
        </div>
      </div>
    </div>
  );
}
