import Contact from "@/models/contact";
import dbConnect from "@/utils/dbConn";
import { NextResponse } from "next/server";


export async function GET(req,res){
    try {
        await dbConnect();
        const user = await Contact.find({});
        return NextResponse.json({ message: "success", user }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "failed", error }, { status: 400 })

    }
}