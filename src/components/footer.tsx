import Link from "next/link";


interface IFooterNavItem {
    title: string;
    path: string;
};

const footerNavItems: IFooterNavItem[] = [
    {
        title: 'Blog',
        path: '/blog',
    },
    {
        title: 'Terms of Use',
        path: '/blog',
    },
    {
        title: 'Privacy',
        path: '/blog',
    },
    {
        title: 'Suggest an idea',
        path: '/blog',
    },
    {
        title: 'Donate for Ukraine 🇺🇦',
        path: 'https://savelife.in.ua/en/',
    },
];

const Footer = () => {

    const renderFooterNavItems = (arr: IFooterNavItem[]) => {
        return arr.map(item => {
            return (
                <li key={item.title} className='text-sm font-light'>
                    <Link href={item.path} target={item.path.startsWith('/') ? '_self' : '_blank'}>{item.title}</Link>
                </li>
            );
        });
    };

    const footerNavItemsList = renderFooterNavItems(footerNavItems);

    return (
        <footer className='bg-light pb-20 before:block before:h-20 before:border-t-[1px] before:border-mainGrey'>
            <div className='container'>
                <nav className='flex justify-between items-center'>
                    <Link href={'/'} className='text-dark text-2xl font-bold'>
                        djm.
                    </Link>

                    <ul className='flex justify-center items-center gap-5'>
                        {footerNavItemsList}
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;