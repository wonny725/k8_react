export default function BoxOfficeTr({ handleClick, obj }) {
  return (
    <tr
      onClick={handleClick}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {obj.rank}
      </td>
      <td className="px-6 py-4">{obj.movieNm}</td>
      <td className="px-6 py-4">
        {parseInt(obj["salesAcc"]).toLocaleString()}
      </td>
      <td className="px-6 py-4">{parseInt(obj.audiAcc).toLocaleString()}</td>
      <td className="px-6 py-4">
        <div className="font-medium  dark:text-blue-500 hover:underline text-blue-600 ">
          {obj.rankInten > 0 ? (
            <span className="text-red-600 pr-3">▲</span>
          ) : obj.rankInten < 0 ? (
            <span className="text-blue-600 pr-3">▼</span>
          ) : (
            " - "
          )}

          {obj.rankInten !== 0 && Math.abs(obj.rankInten)}
        </div>
      </td>
    </tr>
  );
}
