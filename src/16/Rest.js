import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";

export default function Rest() {
  // 화면 재랜더링을 위한 state변수
  const [tdata, setTdata] = useState([]);
  const [trs, setTrs] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false); // 입력, 수정을 확인
  const [updateId, setUpdateId] = useState(); // 수정할 데이터 아이디

  // 입력값을 제어하기 위한 변수
  const txt1Ref = useRef();
  const txt2Ref = useRef();

  // 데이터 가져오기 사용자 정의함수
  const getFetchData = async () => {
    const url = "http://localhost:3005/posts";
    const resp = await fetch(url);
    console.log("resp : ", resp);
    const data = await resp.json();
    console.log("data : ", data);
    setTdata(data);
  };

  // 입력처리 사용자 정의함수
  const handlePost = async () => {
    const url = "http://localhost:3005/posts";
    // 입력 확인
    if (txt1Ref.current.value === "" && txt2Ref.current.value === "") {
      alert("제목과 작성자를 입력하세요!!!");
      txt1Ref.current.focus();
      return;
    }

    if (txt1Ref.current.value === "") {
      alert("제목을 입력하세요!!!");
      txt1Ref.current.focus();
      return;
    }

    if (txt2Ref.current.value === "") {
      alert("작성자를 입력하세요!!!");
      txt2Ref.current.focus();
      return;
    }

    // 보낼 데이터 object로 만들기
    const postData = {
      title: txt1Ref.current.value,
      author: txt2Ref.current.value,
    };

    // post fetch
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const data = await resp.json();
    console.log(data);

    // tdata에 data 추가
    setTdata([...tdata, data]);
  };

  // 삭제하는 사용자 정의함수
  const deleteData = async (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      await fetch(`http://localhost:3005/posts/${id}`, {
        method: "DELETE",
      });
    }
    setTdata(tdata.filter((item) => item.id !== id));
  };

  // 수정 사용자 정의함수
  const updateData = async (item) => {
    if (window.confirm("수정하시겠습니까?")) {
      txt1Ref.current.value = item.title;
      txt2Ref.current.value = item.author;
      setIsUpdate(true);
      setUpdateId(item.id);
    }
  };

  // 수정 처리 사용자 정의함수
  const handelPut = async () => {
    const postData = {
      title: txt1Ref.current.value,
      author: txt2Ref.current.value,
    };

    const resp = await fetch(`http://localhost:3005/posts/${updateId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const data = await resp.json();
    console.log(data);
    const tm = tdata.map((item) => (item.id === updateId ? data : item));
    // tdata에 data 추가
    setTdata(tm);

    setIsUpdate(false);
    setUpdateId("");
    txt1Ref.current.value = "";
    txt2Ref.current.value = "";
    // window.location.reload();
  };

  // 입력과 수정을 구분하는 사용자 정의함수
  const handleOk = () => {
    if (!isUpdate) handlePost();
    else handelPut();
  };

  // 컴포넌트 생성시
  useEffect(() => {
    getFetchData();
  }, []);

  // tdata가 변경 될 때 마다
  useEffect(() => {
    const tm = tdata.map((item) => (
      <tr
        key={item.id}
        className="bg-gray-700 hover:bg-gray-900  text-white w-full text-center border h-10 p-2 whitespace-nowrap font-medium"
      >
        <td className="px-6 py-4">{item.title}</td>
        <td className="px-6 py-4">{item.author}</td>
        <td className="px-6 py-4">
          <TailButton
            caption="삭제"
            color="gray"
            handleClick={() => deleteData(item.id)}
          />
        </td>
        <td className="px-6 py-4">
          <TailButton
            caption="편집"
            color="gray"
            handleClick={() => updateData(item)}
          />
        </td>
      </tr>
    ));
    setTrs(tm);
  }, [tdata]);

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
            ref={txt1Ref}
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
            ref={txt2Ref}
          />
        </div>
        <TailButton
          caption={isUpdate ? "수정" : "입력"}
          color="gray"
          handleClick={handleOk}
          onKeyDown={(e) => activeEnter(e)}
        />
      </div>
      <table className="w-11/12 text-left text-sm font-light text-surface">
        <thead className="border-b border-neutral-200 font-medium">
          <tr className="bg-gray-700 text-white font-bold text-center">
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
