import { LoginCardForm } from "~/components/login-card-form";
import { HydrateClient } from "~/trpc/server";
import { auth } from "auth";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default async function Home() {
  const session = await auth();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col mx-4 items-center justify-center">
        {
          session ? (
            <div>
              <p> Welcome back </p>
              <Button variant="ghost">
                <Link href="/results">Voir les resultats</Link>
              </Button>
            </div>
          ) : (
            <LoginCardForm />
            )
        }
      </main>
    </HydrateClient>
  );
}
