'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { handleActiveTab } from '@/redux/slices/tabsSlice';
import { motion } from 'framer-motion';
import UserProfileForm from '@/components/forms/user/UserProfileForm';
import UserCvForm from '@/components/forms/user/UserCvForm';
import UserSubscriptions from '@/components/forms/user/UserSubscriptions';

const tabsItems: ITabsItem[] = [
	{
		id: 1,
		title: 'Profile',
		content: <UserProfileForm />,
	},
	{
		id: 2,
		title: 'CV and Contacts',
		content: <UserCvForm />
	},
	{
		id: 3,
		title: 'Subscriptions',
		content: <UserSubscriptions />
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
						className={`${activeTab === item.id ? 'text-dark' : 'text-gray-500'} text-lg cursor-pointer transition-all duration-100 py-2 relative`}
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
			<div className='after:block after:border-t-[1px] after:border-mainGrey before:mb-10'>
				<ul className='flex justify-start items-end gap-6 mt-20'>
					{tabsItemsList}
				</ul>
			</div>

			{tabsContent}
		</>

	);
};

export default Tabs;