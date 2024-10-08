import TailButton from "../UI/TailButton";
import { useEffect } from "react";

export default function TrafficNav({ title, c, sel, setSel }) {
  // const [sel, setSel] = useState();

  // const c = ['차대사람', '차대차', '차량단독', '철길건널목'] ;

  const handleBtClick = (item) => {
    setSel(item);
  };
  const tags = c.map((item) => (
    <TailButton
      key={item}
      caption={item}
      color={item === sel ? "orange" : "gray"}
      handleClick={() => handleBtClick(item)}
    />
  ));

  useEffect(() => {
    console.log(sel);
  }, [sel]);

  return (
    <div
      className="w-full bg-gray-50 p-2 m-1
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
