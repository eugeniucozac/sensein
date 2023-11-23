import { NextResponse } from "next/server";

export async function GET() {
   const data = await fetch('https://reference.intellisense.io/thickenernn/v1/referencia');
   const response = await data.json();
   const filteredResults = Object.entries(response.current.data.TK1).filter(([key, value]) => key.startsWith('TK1_') && ({[key]: value}));
   return NextResponse.json(filteredResults);
}