import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "./lib/db";
import bcryptjs from "bcryptjs";
// Your own logic for dealing with plaintext password strings; be careful!

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log(credentials);

        const user = credentials;

        if (!user) {
          return null;
        }

        const toFind = await db.user.findFirst({
          where: {
            email: user.email as string,
          },
        });

        

        if (!toFind) {
          const salt = await bcryptjs.genSalt(10);
          const hashpassword = await bcryptjs.hash(
            user.password as string,
            salt
          )
          
          const toSignup = await db.user.create({
            data: {
              email: user.email as string,
              password: hashpassword,
            },
          });

          return toSignup;
        }
 
        
        if (
          await bcryptjs.compare (
            user.password as string,
            toFind?.password as string
          )
        ) {
          return toFind;
        }
        // logic to salt and hash password

        // logic to verify if the user exists
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      console.log({token, user});
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },

    session: async ({ session, token }:any) => {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  }
});
