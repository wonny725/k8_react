import { useEffect, useRef } from "react";
import TailButton from "../UI/TailButton";
import TailCard from "../UI/TailCard";

export default function Gallery() {
  const x = useRef();

  useEffect(() => {
    x.current.focus();
  }, []);

  const handleCancel = () => {
    x.current.value = "";
    x.current.focus();
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-10/12 bg-gray-100 p-5">
        <h1 className="w-full flex justify-center text-2xl font-bold text-center mb-5">
          한국관광공사 관광사진 정보
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 p-5">
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
              handleClick=""
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
      <div className="flex justify-center">
        <TailCard
          imgUrl="http://tong.visitkorea.or.kr/cms2/website/52/2586952.jpg"
          title="서울빛초롱축제"
          content="서울특별시 종로구"
          kw="서울빛초롱축제, 서울특별시 종로구, 2018 하반기 기획사진, 청계천 야경, 서울 등 축제, 서울 축제"
        />
      </div>
    </div>
  );
}
