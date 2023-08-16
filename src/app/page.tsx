import Link from "next/link";
import Carousel from "@/components/carousel";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';



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
					<Avatar className='w-16 h-16 text-lg font-medium mb-5'>
						<AvatarImage />
						<AvatarFallback>{item.company.slice(0, 1)}</AvatarFallback>
					</Avatar>
					<div>{item.company}</div>
					<div className='font-semibold'>{item.position}</div>
				</li>
			);
		});
	};

	const companiesHiredList = renderCompaniesHiredItems(companiesHired);

	return (
		<main className='min-h-screen'>
			<section className='pt-24'>
				<div className='container'>
					<h1 className='text-3xl sm:text-5xl font-black text-center mb-6 text-zinc-900'>
						<span className='block'>Hire talent or find a job:</span>
						<span className='block '>remotely & on your own</span>
					</h1>

					<p className="block text-light text-xl text-center mb-8">
						<span>Chat directly. See salaries in advance. Work without middlemen.</span>
					</p>

					<div className='flex justify-center items-center gap-5'>
						<Button
							asChild
							size={'lg'}
							className='text-lg'
						>
							<Link href={'/'}>
								Hire talent
							</Link>
						</Button>

						<Button
							asChild
							size={'lg'}
							variant={'outline'}
							className='text-lg'
						>
							<Link href={'/jobs'}>
								Find a job
							</Link>
						</Button>

					</div>

					<div className='mt-20'>
						<div className=' h-12 w-full rounded-t-2xl border border-darkGrey flex justify-between items-center px-4'>
							<div className='flex justify-center items-center gap-2'>
								<div className='w-3 h-3 bg-darkGrey rounded-full' />
								<div className='w-3 h-3 bg-darkGrey rounded-full' />
								<div className='w-3 h-3 bg-darkGrey rounded-full' />
							</div>
							<div>
								<div className=' text-slate-400 text-lg font-semibold'>djm.</div>
							</div>
						</div>

						<div className='h-[200px] sm:h-[552px] w-full border-b border-x border-darkGrey bg-white' >

						</div>
					</div>
				</div>
			</section>

			<section className='hidden sm:block pt-12 pb-12'>
				<div className='container'>
					<h4 className='text-center font-light text-xs tracking-widest mb-6'>GREAT COMPANIES HIRE ON DJIMMI DIRECTLY</h4>
					<ul className='w-full grid grid-cols-5'>
						{companiesHiredList}
					</ul>
				</div>
			</section>

			<Separator />

			<section className='py-20'>
				<div className='container'>
					<h5 className='text-center text-mainGreen text-xl font-semibold mb-6'>
						Djimmi for hiring
					</h5>

					<h2 className='text-3xl sm:text-5xl font-bold text-center mb-8'>
						<span className='block'>Explore 70,000+ candidates,</span>
						<span className='block '>remotely & on your own</span>
					</h2>

					<div className='flex justify-center'>
						<Button
							asChild
							size={'lg'}
							className='text-lg'
						>
							<Link href={'/'}>
								Hire talent
							</Link>
						</Button>

					</div>

					<div className='mt-16 mb-12 h-[200px] sm:h-[400px] w-full rounded-xl border border-darkGrey bg-white'>

					</div>

					<ul className='w-full flex flex-col sm:flex-row justify-around items-start'>
						<li className='w-[300px]'>
							<div className='text-5xl mb-4'>🤑</div>
							<div className='mb-2 text-xl font-semibold'>Lower hiring cost up to 40%</div>
							<div className='text-base font-light'>
								Most of our talent is based in regions with lower IT taxes than in EU or US.
							</div>
						</li>
						<li className='w-[300px]'>
							<div className='text-5xl mb-4'>🤝</div>
							<div className='mb-2 text-xl font-semibold'>Directly access top talent</div>
							<div className='text-base font-light'>
								Djimmi is a platform, not an agency: hire candidates the way you like.
							</div>
						</li>
						<li className='w-[300px]'>
							<div className='text-5xl mb-4'>💵</div>
							<div className='mb-2 text-xl font-semibold'>See salaries in advance</div>
							<div className='text-base font-light'>
								Every single candidate on Djinni lists their net monthly salary expectations.
							</div>
						</li>
					</ul>
				</div>
			</section>

			<Separator />

			<section className='py-20'>
				<div className='container'>
					<h5 className='text-center text-mainGreen text-xl font-semibold mb-6'>
						Djimmi for job search
					</h5>

					<h2 className='text-5xl font-bold text-center mb-8'>
						<span className='block'>Find jobs that pay over $5K/mo,</span>
						<span className='block '>globally & anonymously</span>
					</h2>

					<div className='flex justify-center'>
						<Button
							asChild
							size={'lg'}
							className='text-lg'
						>
							<Link href={'/'}>
								Find a job
							</Link>
						</Button>
					</div>

					<div className='mt-16 mb-12 h-[400px] w-full rounded-xl border border-darkGrey bg-white'>

					</div>

					<ul className='w-full flex justify-around items-start'>
						<li className='w-[300px]'>
							<div className='text-5xl mb-4'>🥷</div>
							<div className='mb-2 text-xl font-semibold'>Search anonymously</div>
							<div className='text-base font-light'>
								Companies won’t see your contacts unless you choose to open them.
							</div>
						</li>
						<li className='w-[300px]'>
							<div className='text-5xl mb-4'>🌍</div>
							<div className='mb-2 text-xl font-semibold'>Find remote & hybrid jobs</div>
							<div className='text-base font-light'>
								Most of companies on Djimmi work and hire remotely: fully or partially.
							</div>
						</li>
						<li className='w-[300px]'>
							<div className='text-5xl mb-4'>🚀</div>
							<div className='mb-2 text-xl font-semibold'>Work with small & mid teams</div>
							<div className='text-base font-light'>
								Lots of startups and product companies hire talented people on Djimmi.
							</div>
						</li>
					</ul>
				</div>
			</section>

			<Separator />

			<section className='py-20'>
				<div className='container'>
					<h2 className='text-5xl font-bold text-center mb-6'>
						What people say about Djimmi
					</h2>
					<Carousel />
				</div>
			</section>

			<Separator />

			<section className='py-20'>
				<div className='container'>
					<h2 className='text-5xl font-black text-center mb-6 text-light'>
						<span className='block'>Hire talent or find a job:</span>
						<span className='block '>remotely & on your own</span>
					</h2>

					<p className="block text-light text-xl text-center mb-8">
						<span>Chat directly. See salaries in advance. Work without middlemen.</span>
					</p>

					<div className='flex justify-center items-center gap-5'>
						<Button
							asChild
							size={'lg'}
							className='text-lg'
						>
							<Link href={'/'}>
								Hire talent
							</Link>
						</Button>

						<Button
							asChild
							size={'lg'}
							variant={'outline'}
							className='text-lg'
						>
							<Link href={'/'}>
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