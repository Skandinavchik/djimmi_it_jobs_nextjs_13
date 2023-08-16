import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { COUNTRIES } from '@/constants/countries';



// const validationSchema = yup.object({
// 	position: yup.string(),
// 	salary: yup.string(),
// 	experience: yup.string(),
// 	country: yup.string(),
// }).required();

const textInputClassName: string = 'col-span-2 rounded-md border-0 ring-1 ring-inset ring-mainGrey focus:ring-2 focus:ring-inset focus:ring-mainGreen';
const labelClassName: string = 'text-lg font-medium';



const UserProfileForm = () => {

	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			position: '',
			salary: '',
			experience: '0',
			country: 'Select Country',
			city: '',
		},
		mode: 'onBlur',
		// resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	const renderSelectCountryOptions = (arr: string[]) => {
		return arr.map(item => {
			return (
				<option key={item} value={item}>{item}</option>
			);
		});
	};

	const countriesOptionList = renderSelectCountryOptions(COUNTRIES);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='w-[800px] py-20'>

			<div className='grid grid-cols-3 gap-y-14 items-center'>
				<label
					htmlFor='position'
					className={labelClassName}
				>
					Position
				</label>
				<input
					type="text"
					{...register('position')}
					className='col-span-2 rounded-md border-0 ring-1 ring-inset ring-mainGrey focus:ring-2 focus:ring-inset focus:ring-mainGreen'
				/>

				<label
					htmlFor='salary'
					className={labelClassName}
				>
					Salary Expectations
				</label>
				<input
					type="text"
					{...register('salary')}
					className={textInputClassName}
				/>

				<label
					htmlFor='experience'
					className={labelClassName}
				>
					Work Experience
				</label>
				<input
					type='range'
					{...register('experience')}
					className='col-span-2 cursor-pointer'
					min={0}
					max={10}
					step={1}
				/>

				<label
					htmlFor='country'
					className={labelClassName}
				>
					Country of Residence
				</label>
				<select
					{...register('country')}
					className={textInputClassName}
				>
					<option disabled selected >Select Country</option>
					{countriesOptionList}
				</select>

				<label
					htmlFor='city'
					className={labelClassName}
				>
					City of Residence
				</label>
				<input
					type="text"
					{...register('city')}
					className={textInputClassName}
				/>
			</div>

			{/* <button type='submit'>
				Submit
			</button> */}
		</form>
	);
};

export default UserProfileForm;