import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from '@/components/navBar';
import Footer from '@/components/footer';
import AuthProvider from '@/components/auth/authProvider/authProvider';

const inter = Inter({ subsets: ['latin'] });

const metadata = {
    title: 'Djimmi | Hire talent or find a job',
    description: 'Generated by create next app',
};

const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <NavBar />
                    {children}
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
};


export default RootLayout;
export { metadata };