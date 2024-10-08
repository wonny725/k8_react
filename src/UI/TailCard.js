import React from "react";

export default function TailCard({ imgUrl, title, content, kw }) {
  //   let kws = [];
  //   if (kw.includes(",")) {
  //     kws = kw.split(",");
  //   } else {
  //     kws.push(kw);
  //   }
  const kws = kw.includes(",") ? kw.split(",") : [kw];
  const kwTags = kws.map((item) => (
    <span
      className="inline-flex bg-gray-100 p-2 m-1 rounded-xl text-sm"
      key={item}
    >
      {item}
    </span>
  ));
  console.log(kws);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <p href="#">
        <img className="rounded-t-lg" src={imgUrl} alt="" />
      </p>
      <div className="p-5">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {title}
        </h1>
        <p className="mb-3 font-normal text-gray-700 ">{content}</p>
        <p className="mb-3 font-normal text-gray-700 ">{kwTags}</p>
      </div>
    </div>
  );
}
