import Link from "next/link";
import Tabs from "@/components/navigation/tabs/tabs";
import TabsContent from "@/components/navigation/tabs/tabsContent";



const tabsItems: ITabsItem[] = [
    {
        title: 'Profile',
    },
    {
        title: 'CV and Contacts',
    },
    {
        title: 'Subscriptions',
    },
    {
        title: 'Stoplist',
    },
    {
        title: 'Hires',
    },
];


const ProfilePage = () => {

    

    return (
        <main className='bg-light'>
            <div className='container'>
                <section className='pt-20'>
                    <h1 className='text-3xl font-medium mb-5'>My profile</h1>
                    <Link href={'/'}
                        className='font-light hover:text-mainGreen transition-all duration-100'
                    >
                        View public Profile
                    </Link>
                    <Tabs tabsItems={tabsItems} />
                </section>

                <div className='h-[1px] w-full bg-mainGrey my-2' />

                <section className='py-10'>
                    <TabsContent />
                </section>
            </div>
        </main>
    );
};

export default ProfilePage;