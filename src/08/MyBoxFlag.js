import React, { useState, useEffect } from "react";
import classNames from "classnames";

export default function MyBoxFlag({ color }) {
  const [colorFlag, setColorFlag] = useState(false);

  const handleColor = () => {
    setColorFlag(!colorFlag);
  };

  useEffect(() => {
    console.log("useEffect color =>", colorFlag);
  }, [colorFlag]);

  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      <div
        className={classNames(
          "w-1/3 h-1/3 flex flex-col justify-center items-center m-4 rounded-xl",
          colorFlag ? `bg-${color}-300` : "",
          `text-${color}-500`
        )}
      >
        <div
          className={classNames(
            "border rounded-md text-3xl mb-4 p-4",
            `border-${color}-500`
          )}
        >
          {color}
        </div>
        <div
          className={classNames(
            "border rounded-md text-lg p-4 cursor-pointer",
            `border-${color}-100`,
            `bg-${color}-100`
          )}
          onClick={handleColor}
        >
          {color} Toggle
        </div>
      </div>
    </div>
  );
}
