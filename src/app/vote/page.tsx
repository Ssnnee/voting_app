import { LoginCardForm } from "~/components/login-card-form";
import { CardSelectSkeleton } from "~/components/ui/card-select-skeleton";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col sm:mx-4 items-center justify-center">
        <p> Here will be the voting thing </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <CardSelectSkeleton key={index} />
          ))}
        </div>
      </main>
    </HydrateClient>
  );
}

