import { useEffect, useRef, useState } from "react";
import TailButton from "../UI/TailButton";
import TailCard from "../UI/TailCard";

export default function Gallery() {
  const [tdata, setTdata] = useState([]);
  const [tags, setTags] = useState([]);

  const x = useRef();

  const handleCancel = () => {
    x.current.value = "";
    x.current.focus();
    setTags([]);
  };

  const getFetchData = async () => {
    const apikey = process.env.REACT_APP_API_KEY;
    const keyword = encodeURI(x.current.value);
    let url =
      "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?";
    url = `${url}serviceKey=${apikey}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&`;
    url = `${url}keyword=${keyword}&_type=json`;
    console.log(url);

    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data.response.body.items.item);
    setTdata(data.response.body.items.item);
    // fetch(url)
    //   .then((resp) => resp.json())
    //   .then((data) => setTdata(data.data))
    //   .catch((err) => console.err(err));
  };

  const handleOk = () => {
    if (x.current.value === "") {
      alert("키워드를 입력하세요.");
      x.current.focus();
      return;
    }
    getFetchData();
  };

  useEffect(() => {
    x.current.focus();
  }, []);

  useEffect(() => {
    const tm = tdata.map((item) => (
      <TailCard
        key={item.galContentId}
        imgUrl={item.galWebImageUrl}
        title={item.galTitle}
        content={item.galPhotographyLocation}
        kw={item.galSearchKeyword}
      />
    ));
    setTags(tm);
  }, [tdata]);

  return (
    <div className="w-full justify-center">
      <div className="w-full bg-gray-100 p-5">
        <h1 className="flex justify-center text-2xl font-bold mb-5">
          한국관광공사 관광사진 정보
        </h1>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 p-5">
          <div className="flex justify-center lg:justify-end items-center">
            <input
              ref={x}
              type="text"
              className="form-input w-10/12"
              id="kw"
              name="kw"
            />
          </div>
          <div className="flex justify-center lg:justify-start items-center">
            <TailButton
              caption="확인"
              color="gray"
              handleClick={handleOk}
              size="w-1/2"
            />
            <TailButton
              caption="취소"
              color="gray"
              handleClick={handleCancel}
              size="w-1/2"
            />
          </div>
        </div>
      </div>
      <div className="w-10/12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center p-5 items-center gap-4">
        {tags}
      </div>
    </div>
  );
}
