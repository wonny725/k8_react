import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import MyClock from "./02/MyClock";
import Lotto from "./05/Lotto";
import FoodMain from "./06/FoodMain";
import BoxOffice from "./07/BoxOffice";
// import Traffic from "./09/Traffic";
import Gallery from "./11/Gallery";
import Festival from "./12/Festival";
import Fcst from "./14/Fcst";
import FcstList from "./14/FcstList";

function App() {
  const navigate = useNavigate();
  return (
    <div
      className="w-full xl:w-10/12 h-screen mx-auto
                flex flex-col justify-center items-center"
    >
      <header
        className="w-full h-20
                  flex justify-between items-center
                  bg-slate-200"
      >
        <p className="text-3xl font-bold p-5">React</p>
        <ul className="flex justify-center items-center text-xl font-bold">
          <li
            className="mx-4 p-2 hover:bg-gray-500 hover:text-white rounded-md cursor-pointer"
            // onClick={() => navigate("/")}
          >
            <Link to="/">시계</Link>
          </li>
          <li
            className="mx-4 p-2 hover:bg-gray-500 hover:text-white rounded-md cursor-pointer"
            onClick={() => navigate("/lotto")}
          >
            <Link to="/lotto">로또생성기</Link>
          </li>
          <li
            className="mx-4 p-2 hover:bg-gray-500 hover:text-white rounded-md cursor-pointer"
            onClick={() => navigate("/foodmain")}
          >
            <Link to="/foodmain">푸드뱅크</Link>
          </li>
          <li
            className="mx-4 p-2 hover:bg-gray-500 hover:text-white rounded-md cursor-pointer"
            onClick={() => navigate("/boxoffice")}
          >
            <Link to="/boxoffice">박스오피스</Link>
          </li>
          {/* <li
            className="mx-4 p-2 hover:bg-gray-500 hover:text-white rounded-md cursor-pointer"
            onClick={() => navigate("/traffic")}
          >
            교통사고
          </li> */}
          <li
            className="mx-4 p-2 hover:bg-gray-500 hover:text-white rounded-md cursor-pointer"
            onClick={() => navigate("/gallery")}
          >
            <Link to="/gallery">관광</Link>
          </li>
          <li
            className="mx-4 p-2 hover:bg-gray-500 hover:text-white rounded-md cursor-pointer"
            onClick={() => navigate("/festival")}
          >
            <Link to="/festival">축제</Link>
          </li>
          <li
            className="mx-4 p-2 hover:bg-gray-500 hover:text-white rounded-md cursor-pointer"
            onClick={() => navigate("/fcst")}
          >
            <Link to="/fcst">일기예보</Link>
          </li>
        </ul>
        <p className="text-2xl p-5">
          <Link to="/">
            <IoHomeOutline />
          </Link>
        </p>
      </header>
      <main
        className="w-full grow
                  flex flex-col items-center
                  overflow-y-auto"
      >
        <Routes>
          <Route path="/" element={<MyClock />} />
          <Route path="/lotto" element={<Lotto />} />
          <Route path="/foodmain" element={<FoodMain />} />
          <Route path="/boxoffice" element={<BoxOffice />} />
          {/* <Route path="/traffic" element={<Traffic />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/festival" element={<Festival />} />
          <Route path="/fcst" element={<Fcst />}></Route>
          <Route path="/fcstlist" element={<FcstList />}></Route>
        </Routes>
      </main>
      <footer
        className="w-full h-15
                  flex justify-center items-center
                   bg-slate-200 font-bold"
      >
        <p className="text-xs p-5">정원영</p>
      </footer>
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
