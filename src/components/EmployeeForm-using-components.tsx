import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { EmpForm } from "../model";
import "./EmployeeForm.css";

export default function EmployeeFormUsingComponent() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
  };

  // Validation using Yup library
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required!!"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required!!"),
    email: Yup.string().email("Invalid email address").required("Required!!"),
    contactNo: Yup.string().required("Required!!"),
  });

  const onSubmit = (values: EmpForm) => console.log("onsubmit", values);

  return (
    //Using Formik Components
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="formContainer">
        <div className="field-input">
          <label htmlFor="firstName">First Name</label>
          <Field type="text" id="firstName" name="firstName" />
          <ErrorMessage name="firstName" />
        </div>

        <div className="field-input">
          <label htmlFor="lastName">Last Name</label>
          <Field type="text" id="lastName" name="lastName" />
          <ErrorMessage name="lastName" />
        </div>

        <div className="field-input">
          <label htmlFor="email">Email</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>

        <div className="field-input">
          <label htmlFor="contactNo">Contact No.</label>
          <Field type="text" id="contactNo" name="contactNo" />
          <ErrorMessage name="contactNo" />
        </div>
        <div className="buttonContainer">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
}
