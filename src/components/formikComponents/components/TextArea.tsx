import { ErrorMessage, Field } from "formik";

export default function TextArea(props: any) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} as="textarea" {...rest} />
      <ErrorMessage name={name} component="div" className="errorMsg" />
    </div>
  );
}
