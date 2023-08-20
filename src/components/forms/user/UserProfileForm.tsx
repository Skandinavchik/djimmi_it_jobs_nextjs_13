'use client';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { COUNTRIES } from '@/constants/countries';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';



// const validationSchema = yup.object({
// 	position: yup.string(),
// 	salary: yup.string(),
// 	experience: yup.string(),
// 	country: yup.string(),
// }).required();



const UserProfileForm = () => {

	const { register, control, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			position: '',
			salary: '',
			experience: [0],
			country: '',
			city: '',
		},
		mode: 'onBlur',
		// resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	const renderSelectCountryOptions = (arr: string[]) => {
		return arr.map((item: string) => {
			return (
				<SelectItem
					key={item}
					value={item}
					className='text-main font-sans dark:text-main-light'
				>
					{item}
				</SelectItem>
			);
		});
	};

	const countriesOptionList = renderSelectCountryOptions(COUNTRIES);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='w-[800px]'>

			<div className='grid grid-cols-3 gap-y-14 items-center'>
				<Label
					htmlFor='position'
					className='text-base text-main font-sans font-medium dark:text-main-light'
				>
					Position
				</Label>
				<Input
					type="text"
					{...register('position')}
					placeholder='React Developer'
					className='col-span-2 font-sans'
				/>

				<Label
					htmlFor='salary'
					className='text-base text-main font-sans font-medium dark:text-main-light'
				>
					Salary Expectations
				</Label>
				<Input
					type="text"
					{...register('salary')}
					placeholder='2000€'
					className='col-span-2 font-sans'
				/>

				<Label
					htmlFor='experience'
					className='text-base text-main font-sans font-medium dark:text-main-light'
				>
					Work Experience
				</Label>
				<Controller
					control={control}
					name='experience'
					render={({ field: { onChange } }) => (
						<Slider
							onValueChange={onChange}
							min={0}
							max={10}
							step={1}
							className='col-span-2'
						/>
					)}
				/>

				<Label
					htmlFor='country'
					className='text-base text-main font-sans font-medium dark:text-main-light'
				>
					Country of Residence
				</Label>
				<Controller
					control={control}
					name='country'
					render={({ field: { onChange, value } }) => (
						<Select onValueChange={onChange}>
							<SelectTrigger className={`${value === '' ? 'text-slate-500 dark:text-slate-400' : 'text-main dark:text-main-light'} h-10 col-span-2 font-sans`}>
								<SelectValue placeholder="Select Country" />
							</SelectTrigger>

							<SelectContent className='max-h-[48vh]'>
								{countriesOptionList}
							</SelectContent>
						</Select>
					)}
				/>

				<Label
					htmlFor='city'
					className='text-base text-main font-sans font-medium dark:text-main-light'
				>
					City of Residence
				</Label>
				<Input
					type="text"
					{...register('city')}
					placeholder='New York City'
					className='col-span-2 font-sans'
				/>

				<Button
					type='submit'
					size={'lg'}
					className='col-span-2 col-start-2 font-sans text-lg font-normal'
				>
					Update Profile
				</Button>
			</div>
		</form>
	);
};

export default UserProfileForm;