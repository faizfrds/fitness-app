import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export const GET = async () => {

 try {
    // const body:string = await req.json();
    // console.log(body);

    const exercise = await prisma.exercise.findMany({
        where: {
          class: 'medium',
        },
      })
      
    return new NextResponse(JSON.stringify(exercise), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }),
      { status: 500 }
    );
  }
};