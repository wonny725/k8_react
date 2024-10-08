import { useEffect, useRef, useState } from "react";
import TailButton from "../UI/TailButton";

export default function MyRef() {
  // 컴포넌트 변수
  let valC = 0;

  const handleBClick = () => {
    valC = valC + 1;
    console.log("valC = ", valC);
  };

  // state 변수
  const [valS, setValS] = useState(0);

  const handleSClick = () => {
    setValS(valS + 1);
    console.log("valS = ", valS + 1);
  };

  // ref 변수
  const valR = useRef(0);

  const handleRClick = () => {
    valR.current = valR.current + 1;
    console.log(" valR.current = ", valR.current);
  };

  const x = useRef();
  const y = useRef();
  const z = useRef();

  const handleAdd = () => {
    if (x.current.value === "") {
      alert("값을 입력하세요.");
      x.current.focus();
      return;
    }
    if (y.current.value === "") {
      alert("값을 입력하세요.");
      y.current.focus();
      return;
    }
    z.current.value = parseInt(x.current.value) + parseInt(y.current.value);
  };

  const handleFocus = () => {
    z.current.value = "";
  };

  useEffect(() => {
    x.current.focus();
  }, []);

  return (
    <>
      <div className="w-3/5 grid grid-cols-3 gap-4 my-10">
        <div>컴포넌트 변수 : {valC}</div>
        <div>state 변수 : {valS}</div>
        <div>ref 변수 : {valR.current}</div>
        <div>
          <TailButton
            caption="컴포넌트 변수"
            color="gray"
            handleClick={handleBClick}
          />
        </div>
        <div>
          <TailButton
            caption="state 변수"
            color="orange"
            handleClick={handleSClick}
          />
        </div>
        <div>
          <TailButton
            caption="ref변수"
            color="stone"
            handleClick={handleRClick}
          />
        </div>
      </div>
      <div className="w-3/5 gird grid-cols-5 gap-2 p-2 bg-gray-200 flex justify-center items-center text-center">
        <div className="">
          <input
            ref={x}
            type="number"
            id="txt1"
            name="txt1"
            className="h-10 w-23"
            onFocus={handleFocus}
          />
        </div>
        <div className="text-2xl font-bold text-center">+</div>
        <div>
          <input
            ref={y}
            type="number"
            id="txt2"
            name="txt2"
            className="h-10 w-23"
            onFocus={handleFocus}
          />
        </div>
        <div>
          <TailButton caption="=" color="gray" handleClick={handleAdd} />
        </div>
        <div>
          <input
            ref={z}
            type="number"
            id="txt3"
            name="txt3"
            readOnly
            className="h-10 w-23"
          />
        </div>
      </div>
    </>
  );
}
