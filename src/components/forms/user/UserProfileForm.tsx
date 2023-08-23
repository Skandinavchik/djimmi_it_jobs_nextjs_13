'use client';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { COUNTRIES } from '@/constants/countries';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox";
import { ComputerDesktopIcon, BanknotesIcon, MapIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import MultiSelect from '@/components/ui/multi-select';




// const validationSchema = yup.object({
// 	position: yup.string(),
// 	salary: yup.string(),
// 	experience: yup.string(),
// 	country: yup.string(),
// }).required();



const UserProfileForm = () => {

	const { register, control, watch, setValue, handleSubmit, formState: { errors, dirtyFields } } = useForm({
		defaultValues: {
			position: '',
			salary: '',
			experience: [0],
			country: '',
			relocateCountry: false,
			city: '',
			relocateCity: false,
			skills: [],
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

			<div className='grid grid-cols-3 gap-y-8 items-start'>
				<Label
					htmlFor='position'
					className='text-base text-main font-sans font-medium dark:text-main-light leading-10'
				>
					Position
				</Label>
				<div className='col-span-2'>
					<div className='relative font-sans'>
						<ComputerDesktopIcon className={`absolute left-2 top-1/2 -translate-y-1/2 w-4 ${dirtyFields.position ? 'text-main dark:text-main-light' : 'text-slate-500'}`} />
						<Input
							type="text"
							{...register('position')}
							placeholder='React Developer'
							className='pl-8'
						/>
					</div>
					<div className='mb-1 h-7 pt-1 pb-2 pl-1 text-[0.72rem] font-sans font-light text-red-700 dark:text-red-400'>
						{errors.position?.message || ' '}
					</div>
				</div>

				<Label
					htmlFor='salary'
					className='text-base text-main font-sans font-medium dark:text-main-light leading-10'
				>
					Salary Expectations
				</Label>
				<div className='col-span-2'>
					<div className='relative font-sans'>
						<BanknotesIcon className={`absolute left-2 top-1/2 -translate-y-1/2 w-4 ${dirtyFields.salary ? 'text-main dark:text-main-light' : 'text-slate-500'}`} />
						<Input
							type="text"
							{...register('salary')}
							placeholder='2000€'
							className='pl-8'
						/>
					</div>
					<div className='mb-1 h-7 pt-1 pb-2 pl-1 text-[0.72rem] font-sans font-light text-red-700 dark:text-red-400'>
						{errors.salary?.message || ' '}
					</div>
				</div>

				<Label
					htmlFor='experience'
					className='text-base text-main font-sans font-medium dark:text-main-light'
				>
					Work Experience
				</Label>
				<div className='col-span-2'>
					<div className='relative font-sans'>
						<Controller
							control={control}
							name='experience'
							render={({ field: { onChange } }) => (
								<Slider
									onValueChange={onChange}
									min={0}
									max={10}
									step={1}
								/>
							)}
						/>
					</div>
					<Label
						htmlFor='experience'
						className={`text-main font-sans font-light ${watch('experience')[0] === 0 ? 'text-slate-500' : 'text-main dark:text-main-light'}`}
					>
						{`${watch('experience')} ${watch('experience')[0] === 1 ? 'year' : 'years'}`}
					</Label>
				</div>

				<Label
					htmlFor='country'
					className='text-base text-main font-sans font-medium dark:text-main-light leading-10'
				>
					Country of Residence
				</Label>
				<div className='col-span-2'>
					<div className='relative font-sans'>
						<MapIcon className={`absolute left-2 top-1/2 -translate-y-1/2 w-4 ${dirtyFields.country ? 'text-main dark:text-main-light' : 'text-slate-500'}`} />
						<Controller
							control={control}
							name='country'
							render={({ field: { onChange, value } }) => (
								<Select onValueChange={onChange}>
									<SelectTrigger className={`${value === '' ? 'text-slate-500 dark:text-slate-400' : 'text-main dark:text-main-light'} pl-8`}>
										<SelectValue placeholder="Select Country" />
									</SelectTrigger>

									<SelectContent className='max-h-[48vh]'>
										{countriesOptionList}
									</SelectContent>
								</Select>
							)}
						/>
					</div>
					<div className='mt-3.5 flex justify-start items-center gap-2.5'>
						<Checkbox
							onCheckedChange={(value: boolean) => setValue('relocateCountry', value)}
							{...register('relocateCountry')}
							className='w-3.5 h-3.5 ml-2'
						/>
						<Label
							htmlFor='relocateCountry'
							className='text-main font-sans font-light dark:text-main-light'
						>
							Consider relocation to another country
						</Label>
					</div>
					<div className='mb-1 h-7 pt-1 pb-2 pl-1 text-[0.72rem] font-sans font-light text-red-700 dark:text-red-400'>
						{errors.country?.message || ' '}
					</div>
				</div>

				<Label
					htmlFor='city'
					className='text-base text-main font-sans font-medium dark:text-main-light leading-10'
				>
					City of Residence
				</Label>
				<div className='col-span-2'>
					<div className='relative font-sans'>
						<MapPinIcon className={`absolute left-2 top-1/2 -translate-y-1/2 w-4 ${dirtyFields.city ? 'text-main dark:text-main-light' : 'text-slate-500'}`} />
						<Input
							type="text"
							{...register('city')}
							placeholder='New York City'
							className='pl-8'
						/>
					</div>
					<div className='mt-3.5 flex justify-start items-center gap-2.5'>
						<Checkbox
							onCheckedChange={(value: boolean) => setValue('relocateCity', value)}
							{...register('relocateCity')}
							className='w-3.5 h-3.5 ml-2'
						/>
						<Label
							htmlFor='relocateCountry'
							className='text-main font-sans font-light dark:text-main-light'
						>
							Consider relocation to another city
						</Label>
					</div>
					<div className='mb-1 h-7 pt-1 pb-2 pl-1 text-[0.72rem] font-sans font-light text-red-700 dark:text-red-400'>
						{errors.city?.message || ' '}
					</div>
				</div>

				<Label
					htmlFor='skills'
					className='text-base text-main font-sans font-medium dark:text-main-light leading-10'
				>
					Skills
				</Label>
				<div className='col-span-2'>
					<div className='relative font-sans'>
						<ComputerDesktopIcon className={`absolute left-2 top-1/2 -translate-y-1/2 w-4 ${dirtyFields.position ? 'text-main dark:text-main-light' : 'text-slate-500'}`} />
						<MultiSelect />
					</div>
					<div className='mb-1 h-7 pt-1 pb-2 pl-1 text-[0.72rem] font-sans font-light text-red-700 dark:text-red-400'>
						{errors.position?.message || ' '}
					</div>
				</div>

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