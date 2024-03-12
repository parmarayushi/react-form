import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

export default function FormikContainer() {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required!!!"),
    description: Yup.string().required("Required!!!"),
    selectOption: Yup.string().required("Required!!!"),
  });
  const onSubmit = (values: any) => console.log("Form Data", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="formContainer">
          <FormikControl
            control="input"
            type="email"
            label="E-mail"
            name="email"
          />

          <FormikControl
            control="textarea"
            label="Description"
            name="description"
            type="text"
          />

          <FormikControl
            control="select"
            label="Select a topic"
            name="selectOption"
            options={dropdownOptions}
          />

          <div className="buttonContainer">
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
