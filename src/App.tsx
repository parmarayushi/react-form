import "./App.css";
import EmployeeFormUsingComponent from "./components/EmployeeForm-using-components";

function App() {
  return (
    <div className="appContainer">
      <div className="app">
        <h1 className="header">REACT FORM</h1>
        {/* <EmployeeForm /> */}
        <EmployeeFormUsingComponent />
      </div>
    </div>
  );
}

export default App;
