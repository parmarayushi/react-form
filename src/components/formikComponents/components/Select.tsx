import { ErrorMessage, Field } from "formik";

export default function Select(props: any) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option: any) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component="div" className="errorMsg" />
    </div>
  );
}
