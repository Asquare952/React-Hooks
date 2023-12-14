import ChangeColor from "./component/ChangeColor";
import StudentsBio from "./component/studentBio/Students";
import DropDownMessage from "./component/dropdown/DropDownTogggle"
import Stayles from "./app.module.css";
function App() {
  return (
    <div className={Stayles.appContainer}>
      <ChangeColor />
      <DropDownMessage/>
      <StudentsBio />
    </div>
  );
}

export default App;
