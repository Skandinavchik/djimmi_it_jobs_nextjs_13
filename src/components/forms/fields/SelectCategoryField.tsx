'use client';

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';



const categories: string[] = ['JavaScript', 'Java', 'C#', 'Node.js', 'Mobile'];

interface IProps {
	value: string;
	onChange: (event: string | React.ChangeEvent<Element>) => void;
};

const SelectCategory = ({ onChange, value }: IProps) => {

	const renderCategoryOptions = (categories: string[]): JSX.Element[] => {
		return categories.map((category: string) => {
			return (
				<SelectItem
					key={category}
					value={category}
					className='text-main font-sans dark:text-main-light'
				>
					{category}
				</SelectItem>
			);
		});
	};

	const categoriesOptionList = renderCategoryOptions(categories);

	return (
		<Select onValueChange={onChange}>
			<SelectTrigger className={`${value === '' ? 'text-slate-500 dark:text-slate-400' : 'text-main dark:text-main-light'} pl-8`}>
				<SelectValue placeholder="Select Category" />
			</SelectTrigger>

			<SelectContent className='max-h-[48vh]'>
				{categoriesOptionList}
			</SelectContent>
		</Select>
	);
};

export default SelectCategory;