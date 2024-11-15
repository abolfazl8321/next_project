import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";
interface Props{
    params:{id:number};
}

export async function GET(request:NextRequest
    ,{params}:{params:{id:string}}){
        const user=await prisma.user.findUnique({
            where:{id: parseInt(params.id) }
        });
        if(!user){
            return NextResponse.json({error:'کاربر مورد نظر یافت نشد'},{status:404});
        }
    return NextResponse.json(user);
}
export async function PUT(request:NextRequest
    ,{params}:{params:{id:string}}){
        const user=await prisma.user.findUnique({
            where:{id:parseInt(params.id)}
        })
        const body=await request.json();
        const validation=schema.safeParse(body);
        if(!user)
            return NextResponse.json({error:'کاربر مورد نظر یافت نشد'},{status:404});
        if(!validation.success)
            return NextResponse.json(validation.error.errors,{status:400});
        const upUser=await prisma.user.update({
            where:{id:user.id},
            data:{
                name:body.name,
                email:body.email
            }
        })
        return NextResponse.json(upUser)
}
export async function DELETE(request:NextRequest
    ,{params}:{params:{id:string}}){
        const user=await prisma.user.findUnique({
            where:{id:parseInt(params.id)}
        })
        const body=await request.json();
        if(!user)
            return NextResponse.json({error:'کاربر مورد نظر یافت نشد'},{status:404});
        await prisma.user.delete({
            where:{id:user.id}
        });
        return NextResponse.json({});
}