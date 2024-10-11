import { useEffect, useRef, useState } from "react";
import TailCard from "../UI/TailCard";

export default function Festival() {
  const [tdata, setTdata] = useState([]);
  // 구 정보
  const [gunm, setGunm] = useState([]);

  const [tags, setTags] = useState();

  // select box를 제어
  const gu = useRef();

  const getFetchData = async () => {
    const apikey = process.env.REACT_APP_API_KEY;
    let url = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?";
    url = `${url}serviceKey=${apikey}&pageNo=1&numOfRows=40&resultType=json`;
    console.log(url);

    const resp = await fetch(url); // await 를 걸어서 먼저 수행 후 다음 문장 수행
    const data = await resp.json();
    console.log(data.getFestivalKr.item);
    setTdata(data.getFestivalKr.item);
  };

  const handleChange = () => {
    console.log(gu.current.value);

    const tm = tdata
      .filter((item) => item.GUGUN_NM === gu.current.value)
      .map((item) => (
        <TailCard
          key={item.UC_SEQ}
          imgUrl={item.MAIN_IMG_THUMB}
          title={item.MAIN_TITLE}
          content={item.TRFC_INFO}
          kw={item.MAIN_PLACE}
        />
      ));
    setTags(tm);
    console.log(tm);
  };

  // 컴포넌트 생성시 한 번만 실행
  useEffect(() => {
    getFetchData();
  }, []);

  // tdata가 채워지면 실행
  useEffect(() => {
    let tm = tdata.map((item) => item["GUGUN_NM"]);
    tm = [...new Set(tm)].sort();
    console.log("tm=", tm);
    tm = tm.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
    setGunm(tm);
  }, [tdata]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-10/12 p-5 flex justify-center items-center">
        <select className="w-1/2 form-select" ref={gu} onChange={handleChange}>
          <option>---구를 선택하세요</option>
          {gunm}
        </select>
      </div>
      <div className="w-10/12 p-2 grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-2">
        {tags}
      </div>
    </div>
  );
}
