// 컴포넌트는 업데이트 안됨(함수형이라) -> state 변수와 Hook 이용
import { useState, useEffect } from "react";
export default function MyListItem({ title, content, imgUrl }) {
  // let안되고 const 상수로 [state, setState], userState(초기값) 초기값을 로컬 스토리지에서 불러옴
  // useState: 이 훅은 함수형 컴포넌트에서 상태를 관리하기 위해 사용됩니다.
  // useState는 상태 변수와 상태를 변경하는 함수를 반환합니다.
  // 여기서는 n이라는 상태 변수와 setN이라는 상태 변경 함수를 반환합니다.
  const [n, setN] = useState(() => {
    const savedN = localStorage.getItem("n");
    return savedN ? parseInt(savedN, 10) : 0;
  });
  // n이 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("n", n);
  }, [n]);

  const handleHClick = () => {
    setN(n + 1);
  };

  useEffect(() => {
    console.log(n); // n이 업데이트된 후에 출력됨
  }, [n]);

  // const handleResetClick = () => {
  //   setN(0);
  //   localStorage.removeItem("n"); // 로컬 스토리지에서도 제거
  // };

  return (
    <div>
      <div className="w-full h-full border border-gray-300 flex justify-center items-center">
        <div className="w-1/3 flex justify-start items-start">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="w-2/3 h-full flex flex-col justify-between items-center">
          <div className="w-full flex flex-col h-3/4 justify-start items-start">
            <div className="p-2 font-bold">{title}</div>
            <div className="p-2 text-xs">{content}</div>
          </div>
          <div className="flex w-full h-1/4 p-1 justify-end items-end">
            <span className="text-xl cursor-pointer" onClick={handleHClick}>
              🧡
            </span>
            <span className="mx-3">좋아요</span>
            <span>{n}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
