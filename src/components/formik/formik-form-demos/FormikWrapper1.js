import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// REFACTORS COMPONENTS USING REUSABLE COMPONENTS WITH INPUT TYPES
import FormikControlsWrapper from '../formik-wrapper-components/FormikControlsWrapper';

export const FormikWrapper1 = () => {
	const initialValues = {
		email: '',
		comments: ''
	};

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email format').required('Required'),
		comments: Yup.string().required('Required')
	});

	// const onSubmit = (values, submitProps) => {
	// 	console.log('SUBMITTED ', values);
	// 	// console.log('submitProps', submitProps)
	// 	submitProps.setSubmitting(false);
	// 	submitProps.resetForm();
	// };
	const onSubmit = (values) => {
		console.log('SUBMITTED WRAPPER DATA', values);
		// console.log('Saved data', JSON.parse(JSON.stringify(values)));
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{/* render props using formik as props and the HoC Form */}
			{(formik) => (
				<Form>
					{/* REFACTOR WITH REUSABLE COMPONENT - Field HoC and Errors abstracted out
					<div className="form-control">
							<label htmlFor="email">Email</label>
							<Field
								type="email"
								id="formik-email"
								name="email"
								placeholder="Format - email@address.com"
							/>
							<ErrorMessage name="email">{(error) => <div className="error">{error}</div>}</ErrorMessage>
						</div> */}

					<FormikControlsWrapper
						control="input"
						type="email"
						id="wrapper-email"
						label="Email"
						name="email"
						placeholder="Format - email@address.com"
					/>

					{/* REFACTOR WITH REUSABLE COMPONENT - Field HoC and Errors abstracted out
					<div className="form-control">
						<label htmlFor="comments">Comments</label>
						<Field
							as="textarea"
							id="formik-comments"
							name="comments"
							className="inpt-3"
							placeholder="We welcome your feedback - type comments here"
						/>
						<ErrorMessage name="comments" component={FormikErrors} />
					</div> */}

					<FormikControlsWrapper
						control="textarea"
						type="comments"
						id="wrapper-comments"
						label="Comments"
						name="comments"
						placeholder="We welcome your feedback - type comments here"
					/>
					<button className="btn-5" type="submit">
						Submit
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default FormikWrapper1;
