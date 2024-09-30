import "./App.css";
import { IoHomeOutline } from "react-icons/io5";

// import Mydiv1 from "./01/Hello";
// import MyClock from "./02/MyClock";
// import Mydiv1 from "./03/Mydiv1";
// import MyList from "./04/MyList";
// import Lotto from "./05/Lotto";
// import FoodMain from "./06/FoodMain";
import BoxOffice from "./07/BoxOffice";
function App() {
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
        <p className="text-2xl font-bold p-5">K-digital 8기</p>
        <p className="text-2xl p-5">
          <IoHomeOutline />
        </p>
      </header>
      <main
        className="w-full grow
                  flex flex-col items-center
                  overflow-y-auto"
      >
        {/* <MyClock /> */}
        {/* <Mydiv1 /> */}
        {/* <MyList/> */}
        {/* <Lotto /> */}
        {/* <FoodMain /> */}
        <BoxOffice />
      </main>
      <footer
        className="w-full h-15
                  flex justify-center items-center
                   bg-black text-white"
      >
        <p className="text-xs p-5">정원영</p>
      </footer>
    </div>
  );
}

export default App;
