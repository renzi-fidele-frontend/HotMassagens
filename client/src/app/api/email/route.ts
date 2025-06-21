import { EmailTemplate } from "@/components/shared/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { ReactNode } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface IDados {
   nome: string;
   email: string;
   telefone: string;
   mensagem: string;
}

export async function GET(req: NextRequest) {
   const searchParams = req.nextUrl.searchParams;
   const dados: IDados = {
      nome: searchParams.get("nome") || "",
      email: searchParams.get("email") || "",
      telefone: searchParams.get("telefone") || "",
      mensagem: searchParams.get("mensagem") || "",
   };

   try {
      const { data, error } = await resend.emails.send({
         from: "contacto@hotmassages.pt",
         to: "renzifidele2001@gmail.com",
         subject: "Chegada de novo cliente",
         react: EmailTemplate(dados) as ReactNode,
      });
      if (error) {
         return NextResponse.json({ error });
      }
      return NextResponse.json(data);
   } catch (error) {
      return NextResponse.json({ error });
   }
}
