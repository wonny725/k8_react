import TailButton from "../UI/TailButton";
export default function TrafficNav({ title, c, sel, setSel }) {
  const handleBtClick = (item) => {
    setSel(item);
  };
  const tags = c.map((item) => (
    <TailButton
      key={item}
      caption={item}
      color={item === sel ? "orange" : "blue"}
      handleClick={() => handleBtClick(item)}
    />
  ));

  return (
    <div
      className="w-full bg-blue-50 p-2 m-1
                    flex justify-between items-center
                    "
    >
      <div
        className="w-1/5 text-2xl font-bold
                      flex justify-center items-center"
      >
        교통사고 {title}
      </div>
      <div className="flex justify-end items-center">{tags}</div>
    </div>
  );
}
