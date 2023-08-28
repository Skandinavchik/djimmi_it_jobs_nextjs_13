'use client';

import { Slider } from '@/components/ui/slider';



interface IProps {
	value: number[];
	onChange: (event: number[] | React.ChangeEvent<Element>) => void;
};

const SliderExperience = ({ onChange, value }: IProps) => {

	const renderExperience = (years: number[]) => {
		const [value] = years;

		switch (true) {
			case !value:
				return 'No Experience';
			case value === 1:
				return '1 year';
			case value === 10:
				return '10+ years';
			default:
				return `${value} years`;
		};
	};

	const experience = renderExperience(value);

	return (
		<>
			<Slider
				onValueChange={onChange}
				min={0}
				max={10}
				step={1}
			/>
			<span className={`text-main text-sm font-sans font-light ${value[0] === 0 ? 'text-slate-500' : 'text-main dark:text-main-light'}`}>
				{experience}
			</span>
		</>
	);
};

export default SliderExperience;