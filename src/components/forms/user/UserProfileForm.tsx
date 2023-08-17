'use client';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { COUNTRIES } from '@/constants/countries';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectItem
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';




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
		return arr.map(item => {
			return (
				<SelectItem key={item} value={item}>{item}</SelectItem>
			);
		});
	};

	const countriesOptionList = renderSelectCountryOptions(COUNTRIES);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='w-[800px]'>

			<div className='grid grid-cols-3 gap-y-14 items-center'>
				<Label
					htmlFor='position'
					className='text-lg font-medium'
				>
					Position
				</Label>
				<Input
					type="text"
					{...register('position')}
					placeholder='React Developer'
					className='col-span-2'
				/>

				<Label
					htmlFor='salary'
					className='text-lg font-medium'
				>
					Salary Expectations
				</Label>
				<Input
					type="text"
					{...register('salary')}
					placeholder='2000€'
					className='col-span-2'
				/>

				<Label
					htmlFor='experience'
					className='text-lg font-medium'
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
					className='text-lg font-medium'
				>
					Country of Residence
				</Label>
				<Controller
					control={control}
					name='country'
					render={({ field: { onChange } }) => (
						<Select
							onValueChange={onChange}
						>
							<SelectTrigger className="h-10 col-span-2">
								<SelectValue placeholder="Select Country" />
							</SelectTrigger>
							<SelectContent className='h-[48vh]'>
								<SelectGroup>
									<SelectLabel>Countries</SelectLabel>
									{countriesOptionList}
								</SelectGroup>
							</SelectContent>
						</Select>
					)}
				/>

				<Label
					htmlFor='city'
					className='text-lg font-medium'
				>
					City of Residence
				</Label>
				<Input
					type="text"
					{...register('city')}
					placeholder='New York City'
					className='col-span-2'
				/>

				<Button
					type='submit'
					size={'lg'}
					className='col-span-2 col-start-2'
				>
					Update Profile
				</Button>
			</div>
		</form>
	);
};

export default UserProfileForm;