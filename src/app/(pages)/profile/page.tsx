import Link from "next/link";
import Tabs from "@/components/navigation/tabs";
import { ITabsItem } from '@/types/navigation/tabsTypes';



const tabsItems: ITabsItem[] = [
    {
        titile: 'Profile',
    },
    {
        titile: 'CV and Contacts',
    },
    {
        titile: 'Subscriptions',
    },
    {
        titile: 'Stoplist',
    },
    {
        titile: 'Hires',
    },
];


const ProfilePage = () => {



    return (
        <main className='bg-light'>
            <div className='container'>
                <section className='pt-20'>
                    <h1 className='text-3xl font-medium mb-5'>My profile</h1>
                    <Link href={'/'}>View public Profile</Link>
                    <Tabs tabsItems={tabsItems} />
                </section>

                <div className='h-[1px] w-full bg-mainGrey my-2' />

                <section className='py-10'>
                    aaaa
                </section>
            </div>
        </main>
    );
};

export default ProfilePage;