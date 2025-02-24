"use client"
import * as React from "react"

import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { useRouter } from "next/navigation"
import { toast } from "~/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { api } from "~/trpc/react"

const formSchema = z.object({
  registrationNumber: z.string().min(6, {
    message: "Le matricule doit contenir au moins 6 caractères",
  }),
})

export function LoginCardForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      registrationNumber: "",
    },
  });

  const { mutateAsync: fetchUserById } = api.student.getStudentByResgistrationNumber.useMutation();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const user = await fetchUserById({ id: values.registrationNumber });

      if (user?.resgitrationNumber) {
        toast({
          title: "Connexion réussie",
          description: "Vous êtes connecté avec succès",
        });

        router.push('/vote');
        console.log("Votre matricule est :", values);
        console.log("Here the fetched value", user.resgitrationNumber);
      } else {
        toast({
          title: "Connexion échouée",
          description: "Votre matricule est incorrect",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de la connexion",
        variant: "destructive",
      });
      console.error("Fetch error:", error);
    }
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>S&apos;authentifier</CardTitle>
        <CardDescription>
          Connectez vous afin de pouvoir voter pour votre miss favorite
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="registrationNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Matricule</FormLabel>
                  <FormControl>
                    <Input placeholder="sne" {...field} />
                  </FormControl>
                  <FormDescription>
                    Écrivez votre matricule pour vous connecter
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Se connecter</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
