import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { connectToDB } from '@/lib/utils';
import { User } from '@/lib/models';

async function getUser(username) {

    await connectToDB();
    const userData = await User.findOne({ username });
    if (!userData || !userData.isAdmin) {
        throw new Error("Wrong credentials or user not found");
    }
    return userData;
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const { username, password } = credentials;
                console.log(username)
                try {
                    const user = await getUser(username);
                    if (!user) return null;

                    // Replace with bcrypt.compare in production
                    const isPasswordCorrect = password === user.password;
                    if (!isPasswordCorrect) {
                        throw new Error("Wrong credentials!");
                    }

                    return user;
                } catch (error) {
                    console.error('Authorization error:', error);
                    return null;
                }
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username;
                token.img = user.img;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.username = token.username;
                session.user.img = token.img;
            }
            return session;
        },
    },
});

