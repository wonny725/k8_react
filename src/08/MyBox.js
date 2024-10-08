import MyBoxFlag from "./MyBoxFlag";

export default function MyBox() {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      <MyBoxFlag color="blue" />
      <MyBoxFlag color="orange" />
    </div>
  );
}
