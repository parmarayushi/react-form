import { ErrorMessage, Field } from "formik";
import "../../EmployeeForm.css";

export default function Input(props: any) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component="div" className="errorMsg" />
    </div>
  );
}
