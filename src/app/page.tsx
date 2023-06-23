import Link from "next/link";


const Home = () => {



    return (
        <main className='min-h-screen'>
            <section className='pt-24'>
                <div className='container'>
                    <h1 className='text-5xl font-black text-center mb-6'>
                        <span className='block'>Hire talent or find a job:</span>
                        <span className='block'>remotely & on your own</span>
                    </h1>

                    <p className="block text-xl text-center mb-8">
                        <span>Chat directly. See salaries in advance. Work without middlemen.</span>
                    </p>

                    <div className='flex justify-center items-center gap-5'>
                        <Link href={'/'} className='text-light text-base font-light border rounded-full px-5 py-2 hover:shadow-md transition-all duration-300'>
                            Hire talent
                        </Link>
                        <Link href={'/'} className='text-light text-base font-light border rounded-full px-5 py-2 hover:shadow-md transition-all duration-300'>
                            Find a job
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
};


export default Home;