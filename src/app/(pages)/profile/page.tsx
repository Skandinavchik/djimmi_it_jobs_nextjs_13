import Link from "next/link";
import Tabs from "@/components/navigation/tabs/tabs";





const ProfilePage = () => {

    

    return (
        <main className='bg-light'>
            <div className='container'>
                <section className='py-20 min-h-[calc(100vh-5rem-193px)]'>
                    <h1 className='text-3xl font-medium mb-5'>My profile</h1>
                    <Link href={'/'}
                        className='font-light hover:text-mainGreen transition-all duration-100'
                    >
                        View public Profile
                    </Link>
                    <Tabs />
                </section>
            </div>
        </main>
    );
};

export default ProfilePage;