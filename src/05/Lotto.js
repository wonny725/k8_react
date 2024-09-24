import React, { useState } from "react";
import TailButton from "../UI/TailButton";
import TailBall from "./TailBall";

export default function Lotto() {
  const [lottoNumbers, setLottoNumbers] = useState([]);

  const handleClick1 = () => {
    const newNumbers = generateLottoNumbers();
    setLottoNumbers(newNumbers);
  };

  function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center mb-10">
        {lottoNumbers.map((number) => (
          <TailBall n={number} key={number} />
        ))}
      </div>
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
