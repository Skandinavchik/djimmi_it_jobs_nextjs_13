import Link from "next/link";


interface IFooterNavItem {
    title: string;
    path: string;
};

const footerNavItems: IFooterNavItem[] = [
    {
        title: 'Blog',
        path: '/',
    },
    {
        title: 'Terms of Use',
        path: '/',
    },
    {
        title: 'Privacy',
        path: '/',
    },
    {
        title: 'Suggest an idea',
        path: '/',
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
        <footer className='bg-light py-20 border-mainGrey border-t'>
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