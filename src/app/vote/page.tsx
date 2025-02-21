// import { CardSelectSkeleton } from "~/components/card-select-skeleton";
import { VotingForm } from "~/components/voting-form";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col sm:mx-4 items-center justify-center">
        <p> Here will be the voting thing </p>
        <div>
          <VotingForm />
        </div>
      </main>
    </HydrateClient>
  );
}

