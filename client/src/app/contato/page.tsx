"use client";
import Container from "@/components/layout/Container";
import { HeadingXl } from "@/components/shared/Typography";
// React-Hook-Form
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Btn from "@/components/shared/Btn";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const formSchema = z.object({
   nome: z.string().min(2, "Insira pelo menos 3 caractéres"),
   email: z.email("Preencha seu email"),
   telefone: z.e164({ error: "Número de telefone inválido" }),
   mensagem: z.string(),
});

const Contato = () => {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         nome: "",
         email: "",
         telefone: "",
         mensagem: "Prefiro somente responder diretamente",
      },
   });

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
   }

   return (
      <div className="bg-linear-to-t from-gray-950 to-gray-800">
         <Container className="py-10 sm:py-15 grid lg:grid-cols-2 gap-12">
            <div>
               <HeadingXl>Entre em contato</HeadingXl>
               <div className="xl:text-lg mt-3 mb-5">
                  <p>
                     Estamos aqui para ajudar! Se você tiver qualquer dúvida, sugestão ou precisar de assistência, sinta-se à vontade para nos
                     contatar.
                  </p>
                  <p>Basta preencher o formulário e nossa equipe entrará em contato com você o mais breve possível.</p>
                  {/* Foto Mobile */}
                  <Image
                     className="rounded lg:hidden mt-6 w-[80%] sm:w-auto"
                     width={520}
                     height={580}
                     src="https://iili.io/FoscuUl.jpg"
                     alt="Foto de contato"
                  />
               </div>
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
            </div>
            {/* Foto Desktop */}
            <div>
               <Image
                  className="rounded border-4 hidden lg:block"
                  width={520}
                  height={580}
                  src="https://iili.io/FoscuUl.jpg"
                  alt="Foto de contato"
               />
            </div>
         </Container>
      </div>
   );
};
export default Contato;
