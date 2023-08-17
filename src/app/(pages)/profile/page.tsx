import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserProfileForm from '@/components/forms/user/UserProfileForm';





const ProfilePage = () => {



	return (
		<main className='bg-light'>
			<div className='container'>
				<section className='py-20 min-h-[calc(100vh-5rem-193px)]'>
					<h1 className='text-3xl font-medium mb-5'>My profile</h1>
					<Link href={'/'}
						className='font-light hover:text-mainGreen transition-all duration-100'
					>
						View public Profile
					</Link>

					<Tabs defaultValue="profile" className="w-full">
						<TabsList className="grid w-full grid-cols-5 mt-20 mb-20">
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