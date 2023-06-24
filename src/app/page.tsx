import Link from "next/link";
import Carousel from "@/components/carousel";



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
                <li key={item.company} className='min-w-[200px] flex flex-col justify-center items-center'>
                    <div className='h-20 w-20 rounded-full bg-mainGrey flex justify-center items-center mb-5'>
                        <p className='text-light font-bold text-2xl'>{item.company.slice(0, 1)}</p>
                    </div>
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
                    <h1 className='text-5xl font-black text-center mb-6 text-light'>
                        <span className='block'>Hire talent or find a job:</span>
                        <span className='block '>remotely & on your own</span>
                    </h1>

                    <p className="block text-light text-xl text-center mb-8">
                        <span>Chat directly. See salaries in advance. Work without middlemen.</span>
                    </p>

                    <div className='flex justify-center items-center gap-5'>
                        <Link href={'/'} className='bg-light text-mainGreen text-lg font-medium border rounded-full px-6 py-2.5 hover:shadow-md transition-all duration-300'>
                            Hire talent
                        </Link>
                        <Link href={'/'} className='text-light text-lg font-medium border rounded-full px-6 py-2.5 hover:shadow-md transition-all duration-300'>
                            Find a job
                        </Link>
                    </div>

                    <div className='mt-20'>
                        <div className=' h-12 w-full bg-light rounded-t-2xl border-b flex justify-between items-center px-4'>
                            <div className='flex justify-center items-center gap-2'>
                                <div className='w-3 h-3 bg-mainGrey rounded-full' />
                                <div className='w-3 h-3 bg-mainGrey rounded-full' />
                                <div className='w-3 h-3 bg-mainGrey rounded-full' />
                            </div>
                            <div>
                                <div className='text-mainGrey text-lg font-semibold'>djm.</div>
                            </div>
                        </div>

                        <div className='h-[552px] w-full bg-white border-b border-mainGrey' />
                    </div>
                </div>
            </section>

            <section className='pt-10 pb-12 bg-white'>
                <div className='container'>
                    <h4 className='text-center font-light text-xs tracking-widest mb-6'>GREAT COMPANIES HIRE ON DJIMMI DIRECTLY</h4>
                    <ul className='flex justify-between items-center w-full'>
                        {companiesHiredList}
                    </ul>
                </div>
            </section>

            <section className='py-20 bg-light border-t border-mainGrey'>
                <div className='container'>
                    <h5 className='text-center text-mainGreen text-xl font-semibold mb-6'>
                        Djimmi for hiring
                    </h5>

                    <h2 className='text-5xl font-bold text-center mb-6'>
                        <span className='block'>Explore 70,000+ candidates,</span>
                        <span className='block '>remotely & on your own</span>
                    </h2>

                    <div className='flex justify-center'>
                        <Link href={'/'} className='bg-mainGreen text-light text-lg font-medium border rounded-full border-mainGreen px-6 py-2.5 hover:shadow-md transition-all duration-300'>
                            Hire talent
                        </Link>
                    </div>

                    <div className='mt-16 mb-12 h-[400px] w-full bg-white rounded-xl border border-mainGrey'>

                    </div>

                    <ul className='w-full flex justify-around items-start'>
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




            <section className='py-20 bg-light border-t border-mainGrey'>
                <div className='container'>
                    <h5 className='text-center text-mainGreen text-xl font-semibold mb-6'>
                        Djimmi for job search
                    </h5>

                    <h2 className='text-5xl font-bold text-center mb-6'>
                        <span className='block'>Find jobs that pay over $5K/mo,</span>
                        <span className='block '>globally & anonymously</span>
                    </h2>

                    <div className='flex justify-center'>
                        <Link href={'/'} className='bg-mainGreen text-light text-lg font-medium border rounded-full border-mainGreen px-6 py-2.5 hover:shadow-md transition-all duration-300'>
                            Find a job
                        </Link>
                    </div>

                    <div className='mt-16 mb-12 h-[400px] w-full bg-white rounded-xl border border-mainGrey'>

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

            <section className='py-20 bg-white border-t border-mainGrey'>
                <div className='container'>
                    <h2 className='text-5xl font-bold text-center mb-6'>
                        What people say about Djimmi
                    </h2>
                    <Carousel />
                </div>
            </section>








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
                        <Link href={'/'} className='bg-light text-mainGreen text-lg font-medium border rounded-full px-6 py-2.5 hover:shadow-md transition-all duration-300'>
                            Hire talent
                        </Link>
                        <Link href={'/'} className='text-light text-lg font-medium border rounded-full px-6 py-2.5 hover:shadow-md transition-all duration-300'>
                            Find a job
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
};


export default Home;