import Mydiv3 from "./Mydiv3";
// export default function Mydiv2(probs) {
// parameter 안 object 중괄호 씌워야함
export default function Mydiv2({ dn1, dn2, dn3 }) {
  return (
    <div
      className="w-4/6 h-4/6 flex flex-col
                    justify-center items-center
                    bg-lime-600 text-white font-bold"
    >
      <div className="w-full h-10 p-5 flex justify-start items-center">
        {/* {`${probs.dn1} > ${probs.dn2}`} */}
        {`${dn1} > ${dn2}`}
      </div>
      {/* <Mydiv3 dn1={probs.dn1} dn2={probs.dn2} dn3={probs.dn3} /> */}
      <Mydiv3 dn1={dn1} dn2={dn2} dn3={dn3} />
    </div>
  );
}
