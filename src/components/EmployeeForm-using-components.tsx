import {
  ErrorMessage,
  FastField,
  Field,
  FieldArray,
  Form,
  Formik,
} from "formik";
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
    technologiesKnown: [""],
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
          {/* updates only when there is change in this field */}
          <FastField type="text" name="email">
            {(props: any) => {
              console.log("hiii");

              const { field, form, meta } = props;
              return (
                <div>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter email"
                    {...field}
                  />
                  {meta.touched && meta.errors ? (
                    <div className="errorMsg">{meta.errors}</div>
                  ) : null}
                </div>
              );
            }}
          </FastField>
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

        <div className="form-control">
          <label htmlFor="linkedin">List of Technologies known</label>
          <FieldArray name="technologiesKnown">
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { technologiesKnown } = values;
              return (
                <>
                  {technologiesKnown.map(
                    (technKnown: string[], index: number) => (
                      <div key={index} className="technology">
                        <Field name={`technologiesKnown[${index}]`} />
                        {index > 0 && (
                          <button
                            type="button"
                            className="technology-button"
                            onClick={() => remove(index)}
                          >
                            -
                          </button>
                        )}

                        <button
                          type="button"
                          className="technology-button"
                          onClick={() => push("")}
                        >
                          +
                        </button>
                      </div>
                    )
                  )}
                </>
              );
            }}
          </FieldArray>
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
