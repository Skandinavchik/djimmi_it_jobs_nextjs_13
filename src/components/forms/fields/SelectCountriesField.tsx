'use client';

import { COUNTRIES } from '@/constants/countries';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';



interface IProps {
	value: string;
	onChange: (event: string | React.ChangeEvent<Element>) => void;
};

const SelectCountriesField = ({ onChange, value }: IProps) => {

	const renderSelectCountryOptions = (countries: string[]): JSX.Element[] => {
		return countries.map((country: string) => {
			return (
				<SelectItem
					key={country}
					value={country}
					className='text-main font-sans dark:text-main-light'
				>
					{country}
				</SelectItem>
			);
		});
	};

	const countriesOptionList = renderSelectCountryOptions(COUNTRIES);

	return (
		<Select onValueChange={onChange}>
			<SelectTrigger className={`${value === '' ? 'text-slate-500 dark:text-slate-400' : 'text-main dark:text-main-light'} pl-8`}>
				<SelectValue placeholder="Select Country" />
			</SelectTrigger>

			<SelectContent className='max-h-[48vh]'>
				{countriesOptionList}
			</SelectContent>
		</Select>
	);
};

export default SelectCountriesField;