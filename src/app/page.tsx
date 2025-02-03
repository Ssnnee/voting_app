import { LoginCardForm } from "~/components/login-card-form";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col mx-4 items-center justify-center">
        <p> Samuel Etape ya Souka </p>
        <p> { hello?.greeting } </p>
        <LoginCardForm />
      </main>
    </HydrateClient>
  );
}
