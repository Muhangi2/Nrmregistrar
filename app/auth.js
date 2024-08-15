import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDatabase } from "./lib/util";
import { User } from "./lib/models";

const login = async (credentials) => {
  try {
    await connectToDatabase();
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("User not found");

    // Compare the provided password with the stored password
    if (credentials.password !== user.password) {
      throw new Error("Wrong credentials");
    }
    console.log("user",user)
    return user;
  } catch (error) {
    console.log(error, "login error");
    throw new Error("Failed to login");
  }
};
export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
      CredentialsProvider({
        async authorize(credentials) {
          try {
            const user = await login(credentials);
            return user;
          } catch (error) {
            console.error("Authorization error:", error);
            return null;
          }
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.username = user.username;
        }
        return token;
      },
      async session({ session, token }) {
        if (token) {
          session.username = token.username;
        }
        return session;
      },
    },
  });
