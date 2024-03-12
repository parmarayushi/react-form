import "./App.css";
import FormikContainer from "./components/formikComponents/FormikContainer";

function App() {
  return (
    <div className="appContainer">
      <div className="app">
        <h1 className="header">REACT FORM USING FORMIK AND YUP</h1>
        {/* <EmployeeForm /> */}
        {/* <EmployeeFormUsingComponent /> */}
        <FormikContainer />
      </div>
    </div>
  );
}

export default App;
