import { useEffect, useState, useRef } from "react";
import BoxOfficeTr from "./BoxOfficeTr";
export default function BoxOffice() {
  const [tdata, setTdata] = useState();
  const [trs, setTrs] = useState();
  const [info, setInfo] = useState();

  const dtRef = useRef();

  const handleDt = () => {
    const currentDt = dtRef.current.value.replaceAll("-", "");
    getFetchData(currentDt);
  };

  //어제 날짜 구하기 함수
  const getYesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const year = yesterday.getFullYear();
    let month = yesterday.getMonth() + 1;
    let day = yesterday.getDate();

    //월 2자리
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    return `${year}-${month}-${day}`;
  };

  const getFetchData = (dt) => {
    const apiKey = process.env.REACT_APP_MV_KEY;
    // const dt = "20240922";

    let url =
      "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?";
    url = `${url}key=${apiKey}&targetDt=${dt}`;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
      .catch((err) => console.log(err));
    console.log("url = ", url);
    console.log("apiKey = ", apiKey);
  };

  useEffect(() => {
    const ydt = getYesterday();
    console.log("yesterday: ", ydt);
    dtRef.current.value = ydt;
    getFetchData(ydt.replaceAll("-", ""));
  }, []);

  const handleClick = (item) => {
    console.log(item);
    let tm = `[${item.movieCd}] ${item.movieNm} : 
            일일 누적관객수 ${parseInt(item.audiCnt).toLocaleString()} 입니다.`;
    setInfo(tm);
  };

  // fetch 데이터가 채워지면
  useEffect(() => {
    if (!tdata) return;
    console.log("tdata = ", tdata);

    let tm = tdata.map((item) => (
      <BoxOfficeTr
        handleClick={() => handleClick(item)}
        obj={item}
        key={item.movieCd}
      />
    ));
    setTrs(tm);
  }, [tdata]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full h-20 p-5 flex justify-between items-center text-right text-gray-700 uppercase bg-gray-50">
        <div className="text-2xl font-bold">박스오피스</div>
        <div>
          <input
            ref={dtRef}
            type="date"
            id="dt"
            name="dt"
            onChange={handleDt}
          />
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-md font-bold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              순위
            </th>
            <th scope="col" className="px-6 py-3">
              영화명
            </th>
            <th scope="col" className="px-6 py-3">
              매출액
            </th>
            <th scope="col" className="px-6 py-3">
              관객수
            </th>
            <th scope="col" className="px-6 py-3">
              증감율
            </th>
          </tr>
        </thead>
        <tbody>{trs}</tbody>
        <tfoot>
          <tr className="bg-gray-700 text-white w-full text-center h-10 p-2">
            <td colSpan={5}>{info}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
