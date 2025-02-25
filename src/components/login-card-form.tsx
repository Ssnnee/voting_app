import * as React from "react"
import { signIn } from "auth"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { api } from "~/trpc/server"

export function LoginCardForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>S&apos;authentifier</CardTitle>
        <CardDescription>
          Connectez vous afin de pouvoir voter pour votre miss favorite
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          action={async () => {
            "use server"

            const latestPoll = await api.poll.getLatest()

            if (!latestPoll) {
              throw new Error("Aucun sondage trouvé.")
            }

            await signIn("", {
              redirectTo: `/poll/${latestPoll.id}`,
            })
          }}
        >
          <button type="submit">Se connecter</button>
        </form>
      </CardContent>
    </Card>
  )
}

