'use client';
import { useAppDispatch, useAppSelector } from '@/app/hooks/reduxHooks';
import { handleActiveTab } from '@/redux/slices/tabsSlice';
import { motion } from 'framer-motion';
import ProfileContent from './content/profileContent';
import CvContent from './content/cvContent';
import SubscriptionsContent from './content/subscriptionsContent';

const tabsItems: ITabsItem[] = [
    {
        id: 1,
        title: 'Profile',
        content: <ProfileContent />,
    },
    {
        id: 2,
        title: 'CV and Contacts',
        content: <CvContent />
    },
    {
        id: 3,
        title: 'Subscriptions',
        content: <SubscriptionsContent />
    },
    {
        id: 4,
        title: 'Stoplist',
    },
    {
        id: 5,
        title: 'Hires',
    },
];


const Tabs = () => {

    const { activeTab } = useAppSelector(state => state.tabs);
    const dispatch = useAppDispatch();

    const renderTabsItems = (arr: ITabsItem[]) => {
        if (arr) {
            return arr.map(item => {
                return (
                    <li
                        key={item.title}
                        className={`${activeTab === item.id ? 'text-mainGreen' : 'text-dark'} cursor-pointer transition-all duration-100 py-2 relative`}
                        onClick={() => dispatch(handleActiveTab(item.id))}
                    >
                        {item.title}
                        {activeTab === item.id
                            ? <motion.div
                                layoutId='activeTab'
                                transition={{ type: 'spring', duration: 0.5 }}
                                className='absolute -bottom-[1px] h-[2px] w-full bg-mainGreen'
                            />
                            : null
                        }
                    </li>
                );
            });
        }
        return null;
    };

    const renderTabsContent = (arr: ITabsItem[]) => {
        const content = arr.map(item => item).filter(item => {
            return item.id === activeTab;
        });

        return content[0].content ? content[0].content : <div>No Content</div>;
    };

    const tabsItemsList = renderTabsItems(tabsItems);
    const tabsContent = renderTabsContent(tabsItems);

    return (
        <>
            <ul className='flex justify-start items-end gap-5 mt-20'>
                {tabsItemsList}
            </ul>

            <div className='before:block before:border-t-[1px] before:border-mainGrey before:mb-10'>
                {tabsContent}
            </div>
        </>

    );
};

export default Tabs;