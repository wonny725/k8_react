function Hello() {
  let today = new Date();
  today = today.toLocaleString();

  let name = "PNU";
  return (
    // jsx는 반드시 하나의 태그만 return
    // fragment tag : <></>
    // class 속성은 반드시 className으로 사용
    <>
      <p className="p1">Hello React!!</p>
      <p className="text-4xl text-white">
        {/* if는 못씀 */}
        {name === "PNU" ? "PNU Jeong WonYoung" : "Jeong WonYoung"}
      </p>
      <p style={{ backgroundColor: "gray", color: "white" }}>
        {/* {new Date().toLocaleString()} */}
        {today}
      </p>
    </>
  );
}

export default Hello;
