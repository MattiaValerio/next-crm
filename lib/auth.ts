import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { saltAndHashPassword } from "@/utils/helper";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./db";
import { NextResponse } from "next/server";
import Error from "next/error";
import { Console } from "console";

export const {
  handlers: { GET, POST }, signIn, signOut, auth} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const email = credentials.email as string;
        const hash = saltAndHashPassword(credentials.password);

        // Check if the user exists
        let user: any = await db.user.findUnique({
          where: {
            email,
          },
        });

        // If the user doesn't exist, create a new one
        if (!user) {
          user = await db.user.create({
            data: {
              id: crypto.randomUUID(),
              email,
              hashedPassword: hash,
            },
          });
        } else {

          // Check if the password is correct
          const isMatch = bcrypt.compareSync(
            credentials.password as string,
            user.hashedPassword
          );

          // If the password is incorrect
          if (!isMatch) {
            console.error("Password is incorrect for user ", user.email);
            
            return;
          }
        }

        return user;
      },
    }),
  ],
});