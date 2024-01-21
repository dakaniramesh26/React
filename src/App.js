import "./App.css";
import Mounting from "./components/lifecyclemethods/mounting/mounting";
function hello() {
  const greenColor = "green";
  return (
    <div>
      <Mounting color={greenColor} />
    </div>
  );
}
export default hello;
