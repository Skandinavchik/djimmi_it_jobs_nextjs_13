import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserProfileForm from '@/components/forms/user/UserProfileForm';
import { Button } from '@/components/ui/button';





const ProfilePage = () => {



	return (
		<main>
			<div className='container'>
				<section className='pt-10 pb-20 min-h-[calc(100vh-5rem-197px)]'>
					<h1 className='text-3xl text-main font-sans mb-5 dark:text-main-light'>My profile</h1>
					<Button
						asChild
						variant={'link'}
						className='text-main text-base font-sans font-light px-0'
					>
						<Link href={'/'}>
							View public Profile
						</Link>
					</Button>

					<Tabs defaultValue="profile" className="w-full">
						<TabsList className="grid w-full grid-cols-5 mt-20 mb-20 font-sans">
							<TabsTrigger value="profile">Profile</TabsTrigger>
							<TabsTrigger value="contacts">CV and Contacts</TabsTrigger>
							<TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
							<TabsTrigger value="stoplist">Stoplist</TabsTrigger>
							<TabsTrigger value="hires">Hires</TabsTrigger>
						</TabsList>

						<TabsContent value="profile">
							<UserProfileForm />
						</TabsContent>

						<TabsContent value="contacts">
							No Content
						</TabsContent>

						<TabsContent value="subscriptions">
							No Content
						</TabsContent>

						<TabsContent value="stoplist">
							No Content
						</TabsContent>

						<TabsContent value="hires">
							No Content
						</TabsContent>
					</Tabs>
				</section>
			</div>
		</main>
	);
};

export default ProfilePage;