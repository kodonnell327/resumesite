import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import MyReCAPTCHA from './utils/recaptcha';

class ContactForm extends React.Component {
    /*
    {formik.touched.email && Formik.errors.email ? (
                        <ErrorMessage name="email"></ErrorMessage>
                    ) : null}
    */


    render() {
        return (
            <Formik
                initialValues={{firstName: '', lastName: "", email: "" }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if(
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting = false;
                    }, 400);
                }}
                >
            
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" type="text"></Field>
                    <ErrorMessage name="firstName"></ErrorMessage>
                    <br/>

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" type="text"></Field>
                    <ErrorMessage name="lastName"></ErrorMessage>
                    <br/>

                    <label htmlFor="email">Email Address</label>
                    <Field id="email" name="email" type="email"></Field>
                    <ErrorMessage name="email"></ErrorMessage>
                    <br/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        );
    }
}

export default ContactForm;