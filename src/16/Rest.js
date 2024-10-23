import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";
export default function Rest() {
  const [tdata, setTdata] = useState([]);
  const [trs, setTrs] = useState([]);

  const txt1Ref = useRef();
  const txt2Ref = useRef();

  const getFetchData = async () => {
    const url = "http://localhost:3005/posts";
    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data);
  };

  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    const tm = tdata.map((item) => (
      <tr
        key={item.id}
        className="bg-gray-700 text-white w-full text-center h-10 p-2"
      >
        <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
          {item.body}
        </td>
        <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
          {item.author}
        </td>
        <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
          <TailButton caption="삭제" color="gray" handleClick="" />
        </td>
        <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
          <TailButton caption="편집" color="gray" handleClick="" />
        </td>
      </tr>
    ));
    setTrs(tm);
  }, [{ tdata }]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div
        className="w-11/12 grid grid-cols-1 md:grid-cols-7 
                      bg-slate-100
                      text-center my-5 p-5"
      >
        <label htmlFor="txt1" className="my-2">
          제목
        </label>
        <div className="flex col-span-3">
          <input
            id="txt1"
            type="text"
            className="form-input w-full"
            inRef={txt1Ref}
          />
        </div>
        <label htmlFor="txt2" className="my-2">
          작성자
        </label>
        <div className="flex">
          <input
            id="txt2"
            type="text"
            className="form-input w-full"
            inRef={txt2Ref}
          />
        </div>
        <TailButton caption="입력" color="gray" handleClick="" />
      </div>
      <table className="w-11/12 text-left text-sm font-light text-surface">
        <thead className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3 w-3/6 text-center">
              제목
            </th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">
              작성자
            </th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">
              삭제
            </th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">
              편집
            </th>
          </tr>
        </thead>
        <tbody>{trs}</tbody>
      </table>
    </div>
  );
}
