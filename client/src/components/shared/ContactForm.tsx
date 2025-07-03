"use client";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import Btn from "@/components/shared/Btn";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
   nome: z.string().min(2, "Insira pelo menos 3 caractéres"),
   email: z.email("Preencha seu email"),
   telefone: z.e164({ error: "Número de telefone inválido" }),
   mensagem: z.string(),
});

const ContactForm = () => {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         nome: "",
         email: "",
         telefone: "",
         mensagem: "",
      },
   });

   async function onSubmit(values: z.infer<typeof formSchema>) {
      const urlParams = new URLSearchParams(values);
      const res = await fetch(`/api/email?${urlParams}`);
      const data = await res.json();
      console.log(data);
   }

   return (
      <Form {...form}>
         <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
            {/* Nome */}
            <FormField
               control={form.control}
               name="nome"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Nome</FormLabel>
                     <FormControl>
                        <Input placeholder="Insira o seu nome" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            {/* Email */}
            <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Email</FormLabel>
                     <FormControl>
                        <Input placeholder="Insira o seu email" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            {/* Telefone */}
            <FormField
               control={form.control}
               name="telefone"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Telefone</FormLabel>
                     <FormControl>
                        <Input placeholder="Insira o seu nr. de telefone" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            {/* Mensagem */}
            <FormField
               control={form.control}
               name="mensagem"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Mensagem</FormLabel>
                     <FormControl>
                        <Textarea placeholder="Descreva o seu desejo" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <Btn type="submit">Enviar Mensagem</Btn>
         </form>
      </Form>
   );
};
export default ContactForm;
