import { useEffect, useState } from "react";

function MyClockTime() {
  const [cTime, setCTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCTime(new Date());
    }, 1000);

    return clearInterval();
  }, []);
  return (
    <div className="w-full flex justify-center items-center text-2xl font-bold">
      {cTime.toLocaleString()}
    </div>
  );
}

export default MyClockTime;
