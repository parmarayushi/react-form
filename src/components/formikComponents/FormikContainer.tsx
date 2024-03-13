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

  const radioOptions = [
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
    { key: "Other", value: "other" },
  ];

  const checkboxOptions = [
    { key: "Option 1", value: "cOption1" },
    { key: "Option 2", value: "cOption2" },
    { key: "Option 3", value: "cOption3" },
  ];

  const contactOptions = [
    { key: "Email", value: "emailMoc" },
    { key: "Telephone", value: "telephoneMoc" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    description: "",
    selectOption: "",
    gender: "",
    checkboxOption: "",
    birthDate: null,
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required!!!"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords doesn't match")
      .required("Required!!"),
    description: Yup.string().required("Required!!!"),
    selectOption: Yup.string().required("Required!!!"),
    gender: Yup.string().required("Required!!!"),
    checkboxOption: Yup.array().required("Required!!!"),
    birthDate: Yup.date().required("Required!!!"),
    modeOfContact: Yup.string().required("Required!!!"),

    phone: Yup.string().when("modeOfContact", {
      is: "telephoneMoc",
      then: () => Yup.string().required("Required!!!"),
    }),
  });

  const onSubmit = (values: any) => {
    console.log("Form Data", values);
  };

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
            control="input"
            type="password"
            label="Password"
            name="password"
          />

          <FormikControl
            control="input"
            type="password"
            label="Confirm Password"
            name="confirmPassword"
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

          <FormikControl
            control="radio"
            label="Gender"
            name="gender"
            options={radioOptions}
          />

          <FormikControl
            control="checkbox"
            label="Checkbox Options"
            name="checkboxOption"
            options={checkboxOptions}
          />

          <FormikControl
            control="radio"
            label="Mode of Contact"
            name="modeOfContact"
            options={contactOptions}
          />

          <FormikControl
            control="input"
            type="text"
            label="Contact no"
            name="phone"
          />

          <FormikControl control="date" label="Birth Date" name="birthDate" />

          <div className="buttonContainer">
            <button type="submit" className="button" disabled={!formik.isValid}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
