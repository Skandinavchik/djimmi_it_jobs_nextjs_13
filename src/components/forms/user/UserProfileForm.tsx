'use client';

import { useForm, Controller } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import SelectSkillsField from '@/components/forms/fields/SelectSkillsField';
import SelectCountriesField from '@/components/forms/fields/SelectCountriesField';
import { ComputerDesktopIcon, BanknotesIcon, MapIcon, MapPinIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import SliderExperience from '../fields/SliderExperience';



const UserProfileForm = () => {

	const { register, control, handleSubmit, formState: { dirtyFields } } = useForm({
		defaultValues: {
			position: '',
			salary: '',
			experience: [0],
			country: '',
			relocateCountry: false,
			city: '',
			relocateCity: false,
			skills: [''],
		},
	});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='w-[800px]'>

			<div className='grid grid-cols-3 gap-y-12 items-start'>

				{/* ===== Position Field ===== */}

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
							{...register('position')}
							type="text"
							placeholder='React Developer'
							className='pl-8'
						/>
					</div>
				</div>

				{/* ===== Salary Field ===== */}

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
							{...register('salary')}
							type="text"
							placeholder='2000€'
							className='pl-8'
						/>
					</div>
				</div>

				{/* ===== Experience Field ===== */}

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
							render={({ field: { onChange, value } }) => (
								<SliderExperience
									onChange={onChange}
									value={value}
								/>
							)}
						/>
					</div>

				</div>

				{/* ===== Select Country Field ===== */}

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
								<SelectCountriesField
									onChange={onChange}
									value={value}
								/>
							)}
						/>
					</div>

					{/* ===== Relocate Country Field ===== */}

					<div className='mt-3.5 flex justify-start items-center gap-2.5'>
						<Controller
							control={control}
							name='relocateCountry'
							render={({ field: { onChange, value } }) => (
								<Checkbox
									onCheckedChange={() => onChange(!value)}
									className='w-3.5 h-3.5 ml-2'
								/>
							)}
						/>
						<Label
							htmlFor='relocateCountry'
							className='text-main font-sans font-light dark:text-main-light'
						>
							Consider relocation to another country
						</Label>
					</div>
				</div>

				{/* ===== City Field ===== */}

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
							{...register('city')}
							type="text"
							placeholder='Bratislava'
							className='pl-8'
						/>
					</div>

					{/* ===== Relocate City Field ===== */}

					<div className='mt-3.5 flex justify-start items-center gap-2.5'>
						<Controller
							control={control}
							name='relocateCity'
							render={({ field: { onChange, value } }) => (
								<Checkbox
									onCheckedChange={() => onChange(!value)}
									className='w-3.5 h-3.5 ml-2'
								/>
							)}
						/>
						<Label
							htmlFor='relocateCountry'
							className='text-main font-sans font-light dark:text-main-light'
						>
							Consider relocation to another city
						</Label>
					</div>
				</div>

				{/* ===== Select Skills Field ===== */}

				<Label
					htmlFor='skills'
					className='text-base text-main font-sans font-medium dark:text-main-light leading-10'
				>
					Skills
				</Label>
				<div className='col-span-2'>
					<div className='relative font-sans'>
						<WrenchScrewdriverIcon className={`absolute left-2 top-1/2 -translate-y-1/2 w-4 ${dirtyFields.skills ? 'text-main dark:text-main-light' : 'text-slate-500'}`} />
						<Controller
							control={control}
							name='skills'
							render={({ field: { onChange, value } }) => (
								<SelectSkillsField
									onChange={onChange}
									value={value}
								/>
							)}
						/>
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