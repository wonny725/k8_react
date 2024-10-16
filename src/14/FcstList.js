import { useSearchParams } from "react-router-dom";
import getcode from "./getcode.json";
import { useEffect, useRef, useState } from "react";

export default function FcstList() {
  const [tdata, setTdata] = useState();
  // 목록 만들기
  const [ops, setOps] = useState();
  // form 값을 참조하기 위한 ref
  const selRef = useRef();
  const [body, setBody] = useState();

  const [sParams] = useSearchParams();
  const gubun = sParams.get("gubun");
  const dt = sParams.get("dt");
  const x = sParams.get("x");
  const y = sParams.get("y");
  const area = sParams.get("area");
  console.log(gubun, dt, x, y, area);

  const handleSelect = () => {
    console.log(selRef.current.value);
    if (!tdata) return;
    const code = getcode.filter(
      (item) => item["항목값"] === selRef.current.value
    )[0];
    console.log("code", code);
    const tm = tdata
      .filter((item) => item["category"] === selRef.current.value)
      .map((item) => (
        <tr
          className="bg-white border-b  hover:bg-gray-200 cursor-pointer"
          key={item.fcstTime + item.fcstValue + item.fcstDate}
        >
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {item.category}
          </td>
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {item.fcstDate.slice(0, 4)}-{item.fcstDate.slice(4, 6)}-
            {item.fcstDate.slice(6, 8)}
          </td>
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {item.fcstTime.slice(0, 2) + ":" + item.fcstTime.slice(2, 4)}
          </td>
          <td className=" w-1/4 px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {item.fcstValue}
            {code.단위}
          </td>
        </tr>
      ));
    setBody(tm);
  };

  const getFetchData = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data.response.body.items.item);
    setTdata(data.response.body.items.item);
  };

  useEffect(() => {
    const tm = getcode
      .filter((item) => item.예보구분 === gubun)
      .map((item) => (
        <option key={item.항목명} value={item.항목값}>
          {item.항목명}({item.항목값})
        </option>
      ));
    setOps(tm);
    const apikey = process.env.REACT_APP_API_KEY;
    let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/";
    if (gubun === "단기예보") {
      url += "getVilageFcst?";
    } else {
      url += "getUltraSrtFcst?";
    }
    url += `serviceKey=${apikey}&pageNo=1&numOfRows=1000&dataType=json&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`;
    console.log(url);
    getFetchData(url);
  }, []);

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-6 md:gap-4 my-5">
        <h1 className="w-full text-left text-2xl font-bold">
          {area} {gubun} : {dt.slice(0, 4)}-{dt.slice(4, 6)}-{dt.slice(6, 8)}
        </h1>
        <select
          className="w-2/3 form-select"
          onChange={handleSelect}
          ref={selRef}
        >
          <option>항목선택</option>
          {ops}
        </select>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-md font-bold text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              항목명
            </th>
            <th scope="col" className="px-6 py-3">
              예측일자
            </th>
            <th scope="col" className="px-6 py-3">
              예측시간
            </th>
            <th scope="col" className="px-6 py-3">
              항목값
            </th>
          </tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  );
}
