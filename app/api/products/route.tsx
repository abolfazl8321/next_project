import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request:NextRequest){
    const products=await prisma.product.findMany()
    return NextResponse.json(products);
}

export async function POST(request:NextRequest){
    const body=await request.json();
    const validation=schema.safeParse(body);
    const findProduct=await prisma.product.findUnique({
        where:{productName:body.productName}
    })
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:400});
    }
    const newProduct=await prisma.product.create({
        data:{
            productName:body.productName,
            price:body.price
        }
    })
    return NextResponse.json(newProduct,{status:201});
}