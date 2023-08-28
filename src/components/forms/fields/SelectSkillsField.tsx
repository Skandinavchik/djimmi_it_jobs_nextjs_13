'use client';

import { useState } from 'react';
import { CaretSortIcon, CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Command, CommandInput, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/libs/utils';

interface ISkill {
	value: string;
	label: string;
};

interface IProps {
	value: string[];
	onChange: (event: string[] | React.ChangeEvent<Element>) => void;
};

const skills: ISkill[] = [
	{
		value: 'javascript',
		label: 'JavaScript'
	},
	{
		value: 'typescript',
		label: 'TypeScript'
	},
	{
		value: 'react',
		label: 'React'
	},
	{
		value: 'next.js',
		label: 'Next.js'
	},
	{
		value: 'express',
		label: 'Express'
	},
	{
		value: 'nest.js',
		label: 'Nest.js'
	},
	{
		value: 'git',
		label: 'Git'
	},
	{
		value: 'docker',
		label: 'Docker'
	},
];


const SelectSkillsField = ({ onChange, value }: IProps) => {

	const [open, setOpen] = useState<boolean>(false);

	const renderSelectedSkills = (skills: string[]): JSX.Element[] => {
		return skills.map((skill: string) => {
			return (
				<Badge
					key={skill}
					onClick={event => removeSkill(event, skill)}
					className='relative font-sans font-light pr-3.5'
				>
					{skill}
					<Cross2Icon className='absolute top-0.5 right-0.5 w-2 h-2' />
				</Badge>
			);
		});
	};

	const renderAllSkills = (skills: ISkill[]): JSX.Element[] => {
		return skills.map((skill: ISkill) => {
			return (
				<CommandItem
					key={skill.value}
					onSelect={(skill: string) => addSkill(skill)}
					className='cursor-pointer font-sans'
				>
					{skill.label}
					<CheckIcon
						className={cn(
							"ml-auto h-4 w-4",
							value.includes(skill.value) ? "opacity-100" : "opacity-0"
						)}
					/>
				</CommandItem>
			);
		})
	};

	const selectedSkillsList = renderSelectedSkills(value);
	const allSkillsList = renderAllSkills(skills);

	const addSkill = (skill: string): void => {
		if (value.length === 1 && value[0] === '') {
			value.shift();
		}
		if (!value.includes(skill)) {
			onChange([...value, skill]);
			setOpen(false);
		}
	};

	const removeSkill = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, skill: string): void => {
		event.stopPropagation();
		if (value.length === 1) {
			value.push('');
		}
		onChange(value.filter((currentSkill: string) => currentSkill !== skill));
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<div
					aria-expanded={open}
					className='flex flex-wrap min-h-[2.5rem] w-full items-center justify-start gap-1.5 px-8 rounded-md border border-slate-200 bg-transparent py-2 text-sm shadow-sm cursor-pointer ring-offset-white focus:outline-none focus:ring-1 focus:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:ring-offset-slate-950 dark:focus:ring-slate-300'
				>
					{
						value[0] !== ''
							? selectedSkillsList
							: <span className='text-slate-500'>Select skills</span>
					}
					<CaretSortIcon className="absolute right-3 h-4 w-4 shrink-0 opacity-30 top-1/2 -translate-y-1/2" />
				</div>
			</PopoverTrigger>

			<PopoverContent className="p-0 w-[533px]">
				<Command className='dark:bg-slate-800'>
					<CommandInput placeholder="Search skills..." className="h-9 font-sans" />
					<CommandEmpty>No skills found.</CommandEmpty>
					<CommandGroup>
						{allSkillsList}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export default SelectSkillsField;