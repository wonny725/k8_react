import { useRef } from "react";
import TailButton from "../UI/TailButton";
import getxy from "./getxy.json";
import { useNavigate } from "react-router-dom";

export default function Fcst() {
  const sido = getxy
    .map((item) => item["1단계"])
    .map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));

  // 날짜
  const txtDt = useRef();
  // 지역
  const txtArea = useRef();

  const navigate = useNavigate();

  const handleOk = (gubun) => {
    if (txtDt.current.value === "") {
      alert("날짜를 선택하세요.");
      txtDt.current.focus();
      return;
    }

    if (txtArea.current.value === "항목선택") {
      alert("장소를 선택하세요.");
      txtArea.current.focus();
      return;
    }

    console.log(gubun);
    const dt = txtDt.current.value.replaceAll("-", "");
    const area = getxy.filter(
      (item) => item["1단계"] === txtArea.current.value
    )[0];
    const x = area["격자 X"];
    const y = area["격자 Y"];
    navigate(
      `/fcstlist?gubun=${gubun}&dt=${dt}&area=${area["1단계"]}&x=${x}&y=${y}`
    );
  };

  return (
    <div className="w-10/12 flex flex-col justify-center ">
      <h1 className="text-3xl p-5 font-bold">단기예보 입력정보</h1>
      <div className="w-full items-center">
        <div className="grid grid-cols-2 p-5 gap-6">
          <input ref={txtDt} className="form-input" type="date" id="date" />
          <select className="form-select" ref={txtArea}>
            <option>항목선택</option>
            {sido}
          </select>
        </div>
        <div className="grid grid-cols-2 p-5 gap-6">
          <TailButton
            caption="초단기예보"
            color="gray"
            handleClick={() => handleOk("초단기예보")}
            size="w-full"
          />
          <TailButton
            caption="단기예보"
            color="gray"
            handleClick={() => handleOk("단기예보")}
            size="w-full"
          />
        </div>
      </div>
    </div>
  );
}
