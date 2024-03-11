import { FormikErrors, useFormik } from "formik";
import * as Yup from "yup";
import { EmpForm } from "../model";
import "./EmployeeForm.css";

export default function EmployeeForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
  };

  // Validation using formikErrors
  const validate = (values: EmpForm) => {
    const errors: FormikErrors<EmpForm> = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.contactNo) {
      errors.contactNo = "Required";
    }
    return errors;
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

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  return (
    <>
      <form className="formContainer" onSubmit={formik.handleSubmit}>
        <div className="field-input">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="errorMsg">{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className="field-input">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="errorMsg">{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div className="field-input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="errorMsg">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="field-input">
          <label htmlFor="contactNo">Contact No.</label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contactNo}
          />
          {formik.touched.contactNo && formik.errors.contactNo ? (
            <div className="errorMsg">{formik.errors.contactNo}</div>
          ) : null}
        </div>
        <div className="buttonContainer">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
