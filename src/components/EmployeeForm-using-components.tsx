import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { EmpForm } from "../models/empForm";
import "./EmployeeForm.css";

export default function EmployeeFormUsingComponent() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contactNo: ["", ""],
    address: "",
    social: {
      facebook: "",
      linkedin: "",
    },
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
    address: Yup.string().required("Required!!"),
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
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter first Name"
          />
          <ErrorMessage name="firstName" component="div" className="errorMsg" />
        </div>

        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <Field
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter last Name"
          />
          <ErrorMessage name="lastName" component="div" className="errorMsg" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="Enter email"
          />
          <ErrorMessage name="email" component="div" className="errorMsg" />
        </div>

        <div className="form-control">
          <label htmlFor="primaryContactNo">Primary Contact No.</label>
          <Field
            type="text"
            id="primaryContactNo"
            name="contactNo[0]"
            placeholder="Enter primary contactNo"
          />
        </div>

        <div className="form-control">
          <label htmlFor="secondaryContactNo">Secondary Contact No.</label>
          <Field
            type="text"
            id="secondaryContactNo"
            name="contactNo[1]"
            placeholder="Enter secondary contactNo"
          />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field
            as="textarea"
            id="address"
            name="address"
            placeholder="Enter address"
          />
          <ErrorMessage name="address" component="div" className="errorMsg" />
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook Profile</label>
          <Field
            type="text"
            id="facebook"
            name="social.facebook"
            placeholder="Enter facebook profile"
          />
        </div>

        <div className="form-control">
          <label htmlFor="linkedin">Linkedin Profile</label>
          <Field
            type="text"
            id="linkedin"
            name="social.linkedin"
            placeholder="Enter linkedin profile"
          />
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
