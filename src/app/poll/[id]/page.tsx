import { VotingForm } from "~/components/voting-form";
import { HydrateClient } from "~/trpc/server";

export default async  function Home( { params }: { params: { id: number } } ) {
  const {id} = await params;
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col sm:mx-4 items-center justify-center">
        <p> Here will be the voting thing </p>
        <div>
          <VotingForm pollId={id} />
        </div>
      </main>
    </HydrateClient>
  );
}

