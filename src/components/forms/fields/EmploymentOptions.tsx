'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';



interface IProps {
	value: string[];
	onChange: (event: string[] | React.ChangeEvent<Element>) => void;
};

interface IEmploymentOption {
	value: string;
	label: string;
};

const employmentOptions: IEmploymentOption[] = [
	{
		value: 'remote',
		label: 'Remote Work',
	},
	{
		value: 'office',
		label: 'Office',
	},
	{
		value: 'part-time',
		label: 'Part-time',
	},
	{
		value: 'freelance',
		label: 'Freelance(one-time projects)',
	},
];


const EmploymentOptions = ({ onChange, value }: IProps) => {

	const handleChackedValues = (checked: boolean, option: IEmploymentOption): void => {
		if (value[0] === '' && checked) {
			value.shift();
		}

		if (value[0] !== '' && value.length === 1 && !checked) {
			value.push('');
		}

		checked
			? onChange([...value, option.value])
			: onChange(value.filter((item: string) => item !== option.value))
	};

	const renderEmploymentOptions = (options: IEmploymentOption[]): JSX.Element[] => {
		return options.map((option: IEmploymentOption, index: number) => {
			return (
				<div
					key={option.value}
					className='flex justify-start items-center gap-5'
				>
					<Checkbox
						id={`c${index + 1}`}
						checked={value.includes(option.value)}
						onCheckedChange={(checked: boolean) => handleChackedValues(checked, option)}
						className=''
					/>
					<Label
						htmlFor={`c${index + 1}`}
						className='text-base font-normal leading-10'
					>
						{option.label}
					</Label>
				</div>
			);
		});
	};

	const employmentOptionsList = renderEmploymentOptions(employmentOptions);

	return (
		<>
			{employmentOptionsList}
		</>
	);
};

export default EmploymentOptions;