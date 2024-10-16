import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";
export default function Traffic() {
  //전체 데이터
  const [tdata, setTdata] = useState([]);

  //대분류 데이터
  const [c1, setC1] = useState([]);
  const [selC1, setSelC1] = useState();

  //사고유형 데이터
  const [c2, setC2] = useState([]);
  const [selC2, setSelC2] = useState();

  //정보 추출
  const [info, setInfo] = useState();

  //data fetch
  const getFetchData = () => {
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`;
    url = `${url}page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`;
    console.log(url);

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setTdata(data.data))
      .catch((err) => console.err(err));
  };

  //맨처음 한번
  useEffect(() => {
    getFetchData();
  }, []);

  //tdata가 변경되었을때
  useEffect(() => {
    // if (!tdata) return ;

    console.log(tdata);
    let tm = tdata.map((item) => item["사고유형대분류"]);
    tm = [...new Set(tm)];
    console.log("tm=", tm);

    //대분류 생성
    setC1(tm);
  }, [tdata]);

  //대분류 선택 => 사고유형
  useEffect(() => {
    console.log(selC1);
    let tm = tdata
      .filter((item) => item["사고유형대분류"] === selC1)
      .map((item) => item["사고유형"]);

    // tm = tm.map(item => item['사고유형']) ;

    setC2(tm);
    setInfo("");
  }, [selC1]);

  // 사고유형 선택
  useEffect(() => {
    if (!selC2 || !selC2) return;

    let tm = tdata.filter(
      (item) => item["사고유형대분류"] === selC1 && item["사고유형"] === selC2
    );
    tm = tm[0]; //object

    console.log(tm[0]);
    const infoKey = [
      "사고건수",
      "사망자수",
      "중상자수",
      "경상자수",
      "부상신고자수",
    ];
    let tmk = infoKey.map((k, idx) => (
      <div
        key={selC1 + selC2 + idx}
        className="flex justify-center items-center mt-2"
      >
        <div
          className="w-3/5 p-2 bg-lime-700 text-white
                                                        text-center
                                                        text-sm font-bold"
        >
          {k}
        </div>
        <div className="w-2/5 p-2 text-center font-blold">
          {parseInt(tm[k]).toLocaleString()}
        </div>
      </div>
    ));
    setInfo(tmk);
  }, [selC2]);

  return (
    <div className="w-11/12  flex flex-col justify-center items-center">
      {c1 && <TrafficNav title="대분류" c={c1} sel={selC1} setSel={setSelC1} />}
      {c2 && (
        <TrafficNav title="사고유형" c={c2} sel={selC2} setSel={setSelC2} />
      )}
      <div className="w-11/12 grid grid-cols-5 gap-2">{info}</div>
    </div>
  );
}
