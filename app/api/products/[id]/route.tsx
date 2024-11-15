import { NextRequest,NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

interface Props{
    params:{id:number};
}
export async function GET(request:NextRequest
    ,{params}:{params:{id:string}}){
    const product=await prisma.product.findUnique({
        where:{id:parseInt(params.id)}
    })
    if(!product)
        return NextResponse.json({error:'محصول وجود ندارد'},{status:404})

    return NextResponse.json(product);
}
export async function PUT(request:NextRequest
    ,{params}:{params:{id:string}}){
        const product=await prisma.product.findUnique({
            where:{id:parseInt(params.id)}
        })
        const body=await request.json();
        const validation=schema.safeParse(body);
        if(!product)
            return NextResponse.json({error:'محصول وجود ندارد'},{status:404});
        if(!validation.success)
            return NextResponse.json(validation.error.errors,{status:400});
        const upProduct=await prisma.product.update({
            where:{id:parseInt(params.id)},
            data:{
                productName:body.productName,
                price:body.price
            }
        });
        return NextResponse.json(upProduct)
}
export async function DELETE(request:NextRequest
    ,{params}:{params:{id:string}}){
        const body=await request.json();
        const product=await prisma.product.findUnique({
            where:{id:parseInt(params.id)}
        })
        if(!product)
            return NextResponse.json({error:'محصول وجود ندارد'},{status:404});
        await prisma.product.delete({
            where:{id:parseInt(params.id)}
        });
        return NextResponse.json({status:200});
}