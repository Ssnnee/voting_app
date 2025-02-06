// import { CardSelectSkeleton } from "~/components/card-select-skeleton";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col sm:mx-4 items-center justify-center">
        Results
      </main>
    </HydrateClient>
  );
}

