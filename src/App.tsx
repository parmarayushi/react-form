import "./App.css";
import EmployeeFormUsingComponent from "./components/EmployeeForm-using-components";

function App() {
  return (
    <div className="appContainer">
      <h1 className="header">REACT FORM</h1>
      {/* <EmployeeForm /> */}
      <EmployeeFormUsingComponent />
    </div>
  );
}

export default App;
