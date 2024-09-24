export default function TailButton({ caption, color, handleClick }) {
  const btColor = {
    gray: "bg-slate-500",
    orange: "bg-orange-500",
    stone: "bg-stone-500",
  };

  const btColorHover = {
    gray: "hover:bg-slate-800",
    orange: "hover:bg-orange-800",
    stone: "hover:bg-stone-600",
  };

  return (
    <button
      className={`inline-flex justify-center items-center p-3 mx-2
                    text-s font-bold ${btColor[color]} text-white rounded-md ${btColorHover[color]}`}
      onClick={handleClick}
    >
      {caption}
    </button>
  );
}
