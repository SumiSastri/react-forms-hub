import React from 'react';
import { Field, ErrorMessage } from 'formik';

import FormikErrors from '../formik-errors/FormikErrors';

function FormikCheckbox(props) {
	const { label, data, name, ...rest } = props;
	return (
		<div className="form-control">
			<label>{label}</label>
			<Field name={name}>
				{({ field }) => {
					return data.map((options) => {
						// console.log(data, 'check CHECK-BOX data');
						return (
							<React.Fragment key={options.key}>
								<div className="btn-grp-divs">
									<input
										className="checkbox"
										type="checkbox"
										id={options.value}
										{...field}
										{...rest}
										value={options.value}
										checked={field.value.includes(options.value)}
									/>
									<label htmlFor={options.value}>{options.key}</label>
								</div>
							</React.Fragment>
						);
					});
				}}
			</Field>
			<ErrorMessage component={FormikErrors} name={name} />
		</div>
	);
}

export default FormikCheckbox;
