import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: { type: "email" },
                password: { type: "password" },
            },

            async authorize(credentials, req) {
                const res = await fetch('http://localhost:3000/api/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    })
                });

                const user = await res.json();

                if (user) {
                    return user;
                } else {
                    return null
                }
            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/signin',
    },
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };