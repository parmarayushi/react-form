import { ErrorMessage, Field } from "formik";

export default function RadioButton(props: any) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <div className="radio-options">
        <Field name={name} {...rest}>
          {({ field }: any) => {
            return options.map((option: any) => {
              return (
                <div className="options" key={option.key}>
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component="div" className="errorMsg" />
    </div>
  );
}
