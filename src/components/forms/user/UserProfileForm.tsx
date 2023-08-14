import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



const validationSchema = yup.object({
	name: yup.string()
		.required('Name is required.')
		.min(2, 'Name must be at least 2 characters long.'),
	email: yup.string()
		.required('Email is required.')
		.email('Email must be valid.'),
	password: yup.string()
		.required('Password is required.')
		.min(8, 'Password must be at least 8 characters long.')
		.matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
		.matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
		.matches(/[0-9]/, 'Password must contain at least one digit.'),
}).required();



const UserProfileForm = () => {

	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {

		},
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	return (
		<div>Profile Content</div>
	);
};

export default UserProfileForm;