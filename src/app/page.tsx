import Link from "next/link";
import Carousel from "@/components/carousel";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ScrollUpButton from '@/components/navigation/ScrollUpButton';



interface ICompanyHiredItem {
	company: string;
	position: string;
};

const companiesHired: ICompanyHiredItem[] = [
	{
		company: 'A Company',
		position: 'Sr. iOS Developer',
	},
	{
		company: 'B Company',
		position: 'Sr. Product Designer',
	},
	{
		company: 'C Company',
		position: 'Software Engineer',
	},
	{
		company: 'D Company',
		position: 'QA Automation Engineer',
	},
	{
		company: 'E Company',
		position: 'Sr. Software Engineer',
	},
];

const Home = () => {

	const renderCompaniesHiredItems = (arr: ICompanyHiredItem[]) => {

		return arr.map(item => {
			return (
				<li key={item.company} className='flex flex-col justify-center items-center'>
					<Avatar className='w-16 h-16 text-main text-lg font-sans font-normal mb-5 dark:text-main-light'>
						<AvatarImage />
						<AvatarFallback>
							{item.company.slice(0, 1)}
						</AvatarFallback>
					</Avatar>
					<div className='text-main font-sans font-light dark:text-main-light'>{item.company}</div>
					<div className='text-main font-sans font-medium dark:text-main-light'>{item.position}</div>
				</li>
			);
		});
	};

	const companiesHiredList = renderCompaniesHiredItems(companiesHired);

	return (
		<main>
			<ScrollUpButton />
			<section className='pt-24'>
				<div className='container'>
					<h1 className='text-3xl sm:text-5xl text-main font-sans font-medium text-center mb-6 dark:text-main-light'>
						<span className='block'>Hire talent or find a job:</span>
						<span className='block '>remotely & on your own</span>
					</h1>

					<p className="block text-main text-xl font-mono text-center mb-8 dark:text-main-light">
						<span>Chat directly. See salaries in advance. Work without middlemen.</span>
					</p>

					<div className='flex justify-center items-center gap-5'>
						<Button
							asChild
							size={'lg'}
							className='text-lg font-sans font-normal'
						>
							<Link href={'/'}>
								Hire talent
							</Link>
						</Button>

						<Button
							asChild
							size={'lg'}
							variant={'outline'}
							className='text-lg font-sans font-normal'
						>
							<Link href={'/jobs'}>
								Find a job
							</Link>
						</Button>
					</div>

					<div className='mt-20'>
						<div className='h-12 w-full rounded-t-2xl border border-grey-dark bg-grey-light flex justify-between items-center px-4 dark:bg-main dark:border-slate-800'>
							<div className='flex justify-center items-center gap-2'>
								<div className='w-3 h-3 bg-slate-400 rounded-full' />
								<div className='w-3 h-3 bg-slate-400 rounded-full' />
								<div className='w-3 h-3 bg-slate-400 rounded-full' />
							</div>
							<div>
								<div className=' text-slate-400 text-lg font-sans font-medium'>djm.</div>
							</div>
						</div>

						<div className='h-[200px] sm:h-[552px] w-full border-b border-x border-grey-dark bg-white dark:bg-slate-800 dark:border-slate-800' >
						</div>
					</div>
				</div>
			</section>

			<section className='hidden sm:block pt-12 pb-12'>
				<div className='container'>
					<h4 className='text-sm text-main font-sans text-center font-light tracking-widest mb-6 dark:text-main-light'>GREAT COMPANIES HIRE ON DJIMMI DIRECTLY</h4>
					<ul className='w-full grid grid-cols-5'>
						{companiesHiredList}
					</ul>
				</div>
			</section>

			<Separator />

			<section className='py-20'>
				<div className='container'>
					<h5 className='text-center text-slate-400 text-xl font-sans font-medium mb-6'>
						Djimmi for hiring
					</h5>

					<h2 className='text-3xl sm:text-5xl text-main font-sans font-medium text-center mb-8 dark:text-main-light'>
						<span className='block'>Explore 70,000+ candidates,</span>
						<span className='block '>remotely & on your own</span>
					</h2>

					<div className='flex justify-center'>
						<Button
							asChild
							size={'lg'}
							className='text-lg font-sans font-normal'
						>
							<Link href={'/'}>
								Hire talent
							</Link>
						</Button>
					</div>

					<div className='mt-16 mb-12 h-[200px] sm:h-[400px] w-full rounded-xl border border-grey-dark bg-white dark:border-slate-800 dark:bg-slate-800'>

					</div>

					<ul className='w-full grid grid-cols-1 sm:grid-cols-3 gap-y-10 md:gap-x-10 lg:gap-x-40'>
						<li className='w-full'>
							<div className='text-5xl mb-4'>🤑</div>
							<div className='mb-2 text-xl text-main font-sans font-medium dark:text-main-light'>
								Lower hiring cost up to 40%
							</div>
							<div className='text-main font-sans font-light dark:text-main-light'>
								Most of our talent is based in regions with lower IT taxes than in EU or US.
							</div>
						</li>

						<li className='w-full'>
							<div className='text-5xl mb-4'>🤝</div>
							<div className='mb-2 text-xl text-main font-sans font-medium dark:text-main-light'>
								Directly access top talent
							</div>
							<div className='text-main font-sans font-light dark:text-main-light'>
								Djimmi is a platform, not an agency: hire candidates the way you like.
							</div>
						</li>

						<li className='w-full'>
							<div className='text-5xl mb-4'>💵</div>
							<div className='mb-2 text-xl text-main font-sans font-medium dark:text-main-light'>
								See salaries in advance
							</div>
							<div className='text-main font-sans font-light dark:text-main-light'>
								Every single candidate on Djinni lists their net monthly salary expectations.
							</div>
						</li>
					</ul>
				</div>
			</section>

			<Separator />

			<section className='py-20'>
				<div className='container'>
					<h5 className='text-center text-slate-400 text-xl font-sans font-medium mb-6'>
						Djimmi for job search
					</h5>

					<h2 className='text-3xl sm:text-5xl text-main font-sans font-medium text-center mb-8 dark:text-main-light'>
						<span className='block'>Find jobs that pay over $5K/mo,</span>
						<span className='block '>globally & anonymously</span>
					</h2>

					<div className='flex justify-center'>
						<Button
							asChild
							size={'lg'}
							className='text-lg font-sans font-normal'
						>
							<Link href={'/'}>
								Find a job
							</Link>
						</Button>
					</div>

					<div className='mt-16 mb-12 h-[400px] w-full rounded-xl border border-grey-dark bg-white dark:border-slate-800 dark:bg-slate-800'>

					</div>

					<ul className='w-full grid grid-cols-1 sm:grid-cols-3 gap-y-10 md:gap-x-10 lg:gap-x-40'>
						<li className='w-full'>
							<div className='text-5xl mb-4'>🥷</div>
							<div className='mb-2 text-xl text-main font-sans font-medium dark:text-main-light'>
								Search anonymously
							</div>
							<div className='text-main font-sans font-light dark:text-main-light'>
								Companies won’t see your contacts unless you choose to open them.
							</div>
						</li>

						<li className='w-full'>
							<div className='text-5xl mb-4'>🌍</div>
							<div className='mb-2 text-xl text-main font-sans font-medium dark:text-main-light'>
								Find remote & hybrid jobs
							</div>
							<div className='text-main font-sans font-light dark:text-main-light'>
								Most of companies on Djimmi work and hire remotely: fully or partially.
							</div>
						</li>

						<li className='w-full'>
							<div className='text-5xl mb-4'>🚀</div>
							<div className='mb-2 text-xl text-main font-sans font-medium dark:text-main-light'>
								Work with small & mid teams
							</div>
							<div className='text-main font-sans font-light dark:text-main-light'>
								Lots of startups and product companies hire talented people on Djimmi.
							</div>
						</li>
					</ul>
				</div>
			</section>

			<Separator />

			<section className='py-20'>
				<div className='container'>
					<h2 className='text-3xl sm:text-5xl text-main font-sans font-medium text-center mb-6 dark:text-main-light'>
						What people say about Djimmi
					</h2>
					<Carousel />
				</div>
			</section>

			<Separator />

			<section className='py-20'>
				<div className='container'>
					<h2 className='text-3xl sm:text-5xl text-main font-sans font-medium text-center mb-6 dark:text-main-light'>
						<span className='block'>Hire talent or find a job:</span>
						<span className='block '>remotely & on your own</span>
					</h2>

					<p className="block text-main text-xl font-mono text-center mb-8 dark:text-main-light">
						<span>Chat directly. See salaries in advance. Work without middlemen.</span>
					</p>

					<div className='flex justify-center items-center gap-5'>
						<Button
							asChild
							size={'lg'}
							className='text-lg font-sans font-normal'
						>
							<Link href={'/'}>
								Hire talent
							</Link>
						</Button>

						<Button
							asChild
							size={'lg'}
							variant={'outline'}
							className='text-lg font-sans font-normal'
						>
							<Link href={'/jobs'}>
								Find a job
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
};


export default Home;