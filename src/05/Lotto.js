import React, { useState } from "react";
import TailButton from "../UI/TailButton";
import TailBall from "./TailBall";

export default function Lotto() {
  const [lottoNumbers, setLottoNumbers] = useState([]);

  const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 7) {
      const randomN = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomN);
      // const bonus = numbers.splice(-1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  };

  const handleClick1 = () => {
    const newNumbers = generateLottoNumbers();
    setLottoNumbers(newNumbers);
  };
  let tm = lottoNumbers.map((number) => <TailBall n={number} key={number} />);
  tm.splice(
    6,
    0,
    <div
      className="flex justify-center items-center w-20 h-20 m-2
                rounded-full font-bold bg-slate-500 text-white
                text-2xl"
    >
      +
    </div>
  );
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center mb-10">{tm}</div>
      <div className="w-full flex justify-center items-center mb-10">
        <TailButton
          caption={"로또번호생성"}
          color="gray"
          handleClick={handleClick1}
        />
      </div>
    </div>
  );
}
