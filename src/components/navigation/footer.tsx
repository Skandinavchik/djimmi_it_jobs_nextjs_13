import Link from "next/link";
import { Button } from '../ui/button';


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
				<li key={item.title}>
					<Button
						asChild
						variant={'link'}
						className='text-sm text-main font-sans font-light px-2 dark:text-main-light'
					>
						<Link
							href={item.path}
							target={item.path.startsWith('/') ? '_self' : '_blank'}>
							{item.title}
						</Link>
					</Button>
				</li>
			);
		});
	};

	const footerNavItemsList = renderFooterNavItems(footerNavItems);

	return (
		<footer className='py-20 border-grey-dark border-t dark:border-slate-800'>
			<div className='container'>
				<nav className='flex justify-between items-center'>
					<Link href={'/'} className='text-main text-xl font-sans font-bold dark:text-main-light'>
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