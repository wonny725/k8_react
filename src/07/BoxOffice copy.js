import { useEffect, useState } from "react";
import TailButton from "../UI/TailButton";
export default function BoxOffice() {
  const [cnt, setCnt] = useState();

  const handleUp = () => {
    setCnt(cnt + 1);
  };
  // 맨처음 한번 실행 dependency array에 의해 실행되는 시점이 결정
  useEffect(() => {
    console.log("useEffect []");
    setCnt(100);
  }, []);

  // state 변수 cnt가 변경이 될 때
  useEffect(() => {
    console.log("useEffect [cnt]", cnt);
  }, [cnt]);

  // 변경이 일어날 때마다 실행
  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center text-3xl m-5">{cnt}</div>
      <div>
        <TailButton caption="증가" color="gray" handleClick={handleUp} />
      </div>
    </div>
  );
}
