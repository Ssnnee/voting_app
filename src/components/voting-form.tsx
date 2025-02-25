"use client"

import { z } from "zod"

import { toast } from "~/hooks/use-toast"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/form"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "./ui/toggle-group"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SelectCard } from "./select-card"
import { constrainedMemory } from "process"
import { api } from "~/trpc/react"

const formSchema = z.object({
  candidateID: z.string().min(1, {
    message: "Veuillez sélectionner un candidat",
  }),
})

interface VotingFormProps {
  pollId: number
}

export function VotingForm({ pollId }: VotingFormProps) {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      candidateID: "",
    },
  })
  console.log("Poll ID: ", pollId)

  const createVote = api.vote.create.useMutation()
  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "Vous avez voté",
      description: 'Vous avez voté pour le n° ' + data.candidateID,
    }),
    createVote.mutateAsync({
      idCandidate: parseInt(data.candidateID),
      idPoll: pollId,
      idStudent: 1,
    })
    router.push("/results")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="candidateID"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <ToggleGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                  type="single"
                  variant='outline'
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <ToggleGroupItem value="1" className="h-full w-full">
                        <SelectCard
                          missPictureUrd="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          missLastName="Doe"
                          missFirstName="Jane"
                        />
                      </ToggleGroupItem>
                    </FormControl>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <ToggleGroupItem value="2" className="h-full w-full">
                        <SelectCard
                          missPictureUrd="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe1%2Fc2%2F72%2Fe1c27237859ab38263bdf24c68498970.jpg&f=1&nofb=1&ipt=0d4d4361f6582c5bedab76c41160972bd598f1ef97ba5b80cdc24be0d1fc4f02&ipo=images"
                          missLastName="Toe"
                          missFirstName="Jasmine"
                        />
                      </ToggleGroupItem>
                    </FormControl>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <ToggleGroupItem value="3" className="h-full w-full">
                        <SelectCard
                          missPictureUrd="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F18%2F99%2F51%2F189951f36f9dd5a6bdded36a9b9536f2.jpg&f=1&nofb=1&ipt=bdf3d028bc73b5fffd742b403add149a4b80fcf39c4ccc5aeadcfc9809dcae6a&ipo=images"
                          missLastName="Does"
                          missFirstName="Janine"
                        />
                      </ToggleGroupItem>
                    </FormControl>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <ToggleGroupItem value="4" className="h-full w-full">
                        <SelectCard
                          missPictureUrd="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.m66JUnAj134IZWX6gqAirwHaNK%26pid%3DApi&f=1&ipt=251640de583320b103bb048f900e6f5bebddf49547bf274ba12ed2b0fe22a14f&ipo=images"
                          missLastName="Elanga"
                          missFirstName="Koumou"
                        />
                      </ToggleGroupItem>
                    </FormControl>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <ToggleGroupItem value="5" className="h-full w-full">
                        <SelectCard
                          missPictureUrd="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1dTL3jnD6tAzaYH8l649OgHaLv%26pid%3DApi&f=1&ipt=fcdd6f4075927f2925c934f831c6e08769a1df43b2803c787a6712602182b99c&ipo=images"
                          missLastName="Doe"
                          missFirstName="Jane"
                        />
                      </ToggleGroupItem>
                    </FormControl>
                  </FormItem>
                </ToggleGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Voter</Button>
      </form>
    </Form>
  )
}
