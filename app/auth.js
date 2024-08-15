import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDatabase } from "./lib/util";
import { User } from "./lib/models";


const login = async (credentials) => {
  try {
    connectToDatabase();
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("Wrong credentials");
    //   const isPasswordCorrect=await
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
          return null;
        }
      },
    }),
  ],
});
