import FoodCard from "./FoodCard";
import fooddata from "./fooddata.json";
import TailButton from "../UI/TailButton";
import { useState } from "react";

export default function FoodMain() {
  const [tags, setTags] = useState();

  let tm = fooddata.map((item) => item["운영주체 분류"].replace(" ", ""));
  tm = [...new Set(tm)]; // List 내 Set() 중복제거, [...] -> set(집합) 에서 list로 다시

  const bts = tm.map((item) => (
    <TailButton
      key={item}
      caption={item}
      color="gray"
      handleClick={() => handleFood(item)} // item을 넣으려면 콜백함수
    />
  ));

  const handleFood = (item) => {
    const tm = fooddata
      .filter((i) => i["운영주체 분류"].replace(" ", "") === item)
      .map((i) => <FoodCard obj={i} key={i} />);
    setTags(tm); // 상태 업데이트
  };
  return (
    <div className="w-full flex flex-col justify-start h-screen">
      <div className="w-full flex justify-center h-15 bg-blue-200">{bts}</div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">{tags}</div>
    </div>
  );
}
