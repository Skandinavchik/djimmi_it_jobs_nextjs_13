'use client';
import { useState } from 'react';
import { ITabsItem } from '@/types/navigation/tabsTypes';


interface IProps {
    tabsItems?: ITabsItem[];
};


const Tabs = ({ tabsItems }: IProps) => {

    const [activeTab, setActiveTab] = useState<number>(0);

    const renderTabsItems = (arr: ITabsItem[] | undefined): JSX.Element[] | null => {
        if (arr) {
            return arr.map((item, index) => {
                return (
                    <li
                        key={item.titile}
                        className={`${activeTab === index ? 'text-mainGreen' : 'text-dark'} cursor-pointer`}
                        onClick={() => setActiveTab(index)}
                    >
                        {item.titile}
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