import "./App.css";
import Parent from "./components/counter/parent";
import UnControlled from "./components/forms/uncontrolled/uncontrolled";
import UseStateExample1 from "./components/hooks/usestate/usestateex1";
import UseStateExample2 from "./components/hooks/usestate/usestateex2";
import UseStateExample3 from "./components/hooks/usestate/usestateex3";
import Mounting from "./components/lifecyclemethods/mounting/mounting";
import UpdatePhase from "./components/lifecyclemethods/updating/update";
function hello() {
  // const greenColor = "green";
  return (
    <div>
    {/* <UnControlled/> */}
    <UseStateExample1/>
    <UseStateExample2/>
    <UseStateExample3/>

    </div>
  );
}
export default hello;
