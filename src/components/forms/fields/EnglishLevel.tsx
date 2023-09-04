'use client';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';



interface IProps {
	onChange: (event: string | React.ChangeEvent<Element>) => void;
};

interface IEnglishLevelOption {
	value: string;
	label: string;
};

const englishLevelOptions: IEnglishLevelOption[] = [
	{
		value: 'noEnglish',
		label: 'No English',
	},
	{
		value: 'beginner',
		label: 'Beginner/Elementary',
	},
	{
		value: 'preIntermediate',
		label: 'Pre-Intermediate',
	},
	{
		value: 'intermediate',
		label: 'Intermediate',
	},
	{
		value: 'upperIntermediate',
		label: 'Upper-Intermediate',
	},
	{
		value: 'advanced',
		label: 'Advanced/Fluent',
	},
];

const EnglishLevel = ({ onChange }: IProps) => {

	const renderEnglishLevelOptions = (options: IEnglishLevelOption[]) => {
		return options.map((option: IEnglishLevelOption, index: number) => {
			return (
				<div
					key={option.value}
					className='flex justify-start items-center gap-5'
				>
					<RadioGroupItem id={`r${index + 1}`} value={option.value} />
					<Label
						htmlFor={`r${index + 1}`}
						className='text-base font-normal leading-10'>
						{option.label}
					</Label>
				</div>
			);
		});
	};

	const englishLevelOptionsList = renderEnglishLevelOptions(englishLevelOptions);

	return (
		<RadioGroup
			onValueChange={onChange}
			defaultValue=''
			className='flex flex-col justify-start items-start gap-0'
		>
			{englishLevelOptionsList}
		</RadioGroup>
	);
};

export default EnglishLevel;