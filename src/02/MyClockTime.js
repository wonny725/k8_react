function MyClockTime() {
  let today = new Date();
  today = today.toLocaleString();
  return "현재시간 : " + today;
}

export default MyClockTime;
