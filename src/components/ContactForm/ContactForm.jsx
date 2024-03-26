import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const formValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),

  number: Yup.string()
    .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, {
      message: "Invalid phone number format, use XXX-XX-XX",
      excludeEmptyString: true,
    })
    .required("Required"),
});

export default function ContactForm() {
  const userName = useId();
  const userPhoneNumber = useId();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={formValidationSchema}
      onSubmit={(values, action) => {
        dispatch(
          addContact({
            id: values.id,
            name: values.name,
            number: values.number,
          })
        );
        action.resetForm();
      }}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={userName}>Name</label>
          <Field className={css.input} name="name" id={userName}></Field>
          <ErrorMessage
            className={css.error}
            component="span"
            name="name"
          ></ErrorMessage>
        </div>

        <div>
          <label htmlFor={userPhoneNumber}>Number</label>
          <Field
            className={css.input}
            name="number"
            id={userPhoneNumber}
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="XXX-XX-XX"
          ></Field>
          <ErrorMessage
            className={css.error}
            component="span"
            name="number"
          ></ErrorMessage>
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
