import { NextResponse } from "next/server";
import { IContactFormData } from "../../types";

export async function POST(req: Request) {
  const body = (await req.json()) as IContactFormData;

  console.log(body); // Про логирование написано в тестовом

  return NextResponse.json(`Thank you for your interest, ${body.name}`);
}
