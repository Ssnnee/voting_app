import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        resgitrationNumber: { label: "Matricule", type: "text" },
      },
      authorize: async (credentials) => {
        if (!credentials?.resgitrationNumber) {
          throw new Error("Matricule requis");
        }

        const user = await prisma.student.findFirst({
          where: { resgitrationNumber: credentials.resgitrationNumber },
        });

        if (!user) {
          throw new Error("Invalid credentials.");
        }

        return {
          id: user.id.toString(),
          registrationNumber: user.resgitrationNumber,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});

