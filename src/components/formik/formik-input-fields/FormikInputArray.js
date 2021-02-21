// import React from 'react';
// import { Field, ErrorMessage } from 'formik';

// import FormikErrors from '../formik-errors/FormikErrors';

// function FormikRadioButtons(props) {
// 	const { id, label, name, data, ...rest } = props;
// 	return (
// 		<div className="form-control">
// 			<label>{label}</label>
// 			<Field name={name}>
// 				{({ field }) => {
// 					console.log(field, 'props in radio button Field HoC');
// 					return data.map((options) => {
// 						return (
// 							<React.Fragment key={options.id}>
// 								<div className="btn-grp-divs">
// 									<input
// 										type="text"
// 										key={options.value}
// 										{...field}
// 										{...rest}
// 										value={options.value}
// 										checked={field.value === options.value}
// 									/>
// 									<label htmlFor={options.value}>{options.key}</label>
// 								</div>
// 							</React.Fragment>
// 						);
// 					});
// 				}}
// 			</Field>
// 			<ErrorMessage component={FormikErrors} name={name} />
// 		</div>
// 	);
// }

// export default FormikRadioButtons;

// <FieldArray name="socialHandles">
// {(fieldArrayProps) => {
//     const { push, remove, form } = fieldArrayProps;
//     const { values } = form;
//     const { socialHandles } = values;
//     // console.log('fieldArrayProps', fieldArrayProps);
//     // console.log('Form errors', form.errors);
//     return (
//         <div>
//             {socialHandles.map((socialHandles, index) => (
//                 <div key={index}>
//                     <Field
//                         className="inpt-3"
//                         name={`socialHandles[${index}]`}
//                         placeholder="Add as many handles here"
//                     />
//                     {index > 0 && (
//                         <button
//                             className="btn-2"
//                             type="button"
//                             onClick={() => remove(index)}
//                         >
//                             - Remove this handle
//                         </button>
//                     )}
//                 </div>
//             ))}
