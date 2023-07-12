'use client';
import { useAppDispatch, useAppSelector } from '@/app/hooks/reduxHooks';
import { handleActiveTab } from '@/redux/slices/tabsSlice';



interface IProps {
    tabsItems?: ITabsItem[];
};

const Tabs = ({ tabsItems }: IProps) => {

    const { activeTab } = useAppSelector(state => state.tabs);
    const dispatch = useAppDispatch();

    const renderTabsItems = (arr: ITabsItem[] | undefined) => {
        if (arr) {
            return arr.map((item, index) => {
                return (
                    <li
                        key={item.title}
                        className={`${activeTab === index ? 'text-mainGreen' : 'text-dark'} cursor-pointer transition-all duration-100`}
                        onClick={() => dispatch(handleActiveTab(index))}
                    >
                        {item.title}
                    </li>
                );
            });
        }
        return null;
    };

    const tabsItemsList = renderTabsItems(tabsItems);

    return (
        <ul className='flex justify-start items-end gap-5 mt-10'>
            {tabsItemsList}
        </ul>
    );
};

export default Tabs;