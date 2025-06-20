import { EmailTemplate } from "@/components/shared/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { ReactNode } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
   const body = await req.json();
   const { email, mensagem, nome, telefone } = body;

   try {
      const { data, error } = await resend.emails.send({
         from: "contacto@hotmassages.pt",
         to: "renzifidele2001@gmail.com",
         subject: "Chegada de novo cliente",
         react: EmailTemplate({ email, mensagem, nome, telefone }) as ReactNode,
      });

      if (error) {
         return NextResponse.json({ error });
      }

      return NextResponse.json(data);
   } catch (error) {
      return NextResponse.json({ error });
   }
}
