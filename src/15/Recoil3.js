import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";

import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilState } from "recoil";

export default function Recoil3({ x3, y3 }) {
  const [x, setX] = useState(x3);
  const [y, setY] = useState(y3);
  const inRef = useRef();

  const [n, setN] = useRecoilState(AtomN);
  const [, setN2] = useRecoilState(AtomN2);

  const handleUp = () => {
    //x를 변경하려면 setX로 변경
    setX(x + 1);
    setN(n + 1);
  };

  const handleDown = () => {
    setX(x - 1);
    setN(n - 1);
  };

  const handleReset = () => {
    setX(1);
    setN(2);
  };

  useEffect(() => {
    setY(x * parseInt(inRef.current.value));
  }, [x]);

  useEffect(() => {
    setN2(n * parseInt(inRef.current.value));
  }, [n]);

  useEffect(() => {
    localStorage.setItem("x", x);
  }, [x]);

  return (
    <div
      className="w-14/15  h-4/5 flex flex-col
                    mt-10 p-5 ml-2
                    bg-gray-300 text-gray-700 font-bold"
    >
      Recoil3 (x = {x}, y= {y})
      <input
        type="number"
        min={2}
        max={5}
        ref={inRef}
        defaultValue={2}
        className="form-input"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <TailButton
          caption="증가"
          color="stone"
          handleClick={handleUp}
          size="w-10/12"
        />
        <TailButton
          caption="감소"
          color="gray"
          handleClick={handleDown}
          size="w-10/12"
        />

        <TailButton
          caption="reset"
          color="orange"
          handleClick={handleReset}
          size="w-10/12"
        />
      </div>
    </div>
  );
}
