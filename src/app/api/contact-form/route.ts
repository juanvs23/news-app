import { sendEmail } from './../../../utils/sendEmail';
import { StatusResponse } from './../../../types/axios';
import { NextRequest, NextResponse } from "next/server";
import supabase from "../../../utils/supabase/server";


export async function POST(request: NextRequest) {
    const body = await request.json();

    const { name,email } = body;
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(email);

    
    Object.entries(body).forEach(([key,value])=>{
        if(value=== ''){
            return NextResponse.json( {
                status: 'failed',
                messages: `El campo ${key} es obligatorio.`,
                success: false
            }, { status: 400 });
        }
    });
    if(!isValidEmail){
        return  NextResponse.json( {
                status: 'failed',
                messages: `El formato del correo invalido.`,
                success: false
            }, { status: 400 });
    }

    //send email
    await sendEmail({...body});
    
    
    //Check email exists
    const {data} = await supabase.from('contact_form')
                .select('*')
                .eq('email', email)
    console.log(data);
    if(data && data.length == 0){
         const {data, error: insertError } = await supabase.from('contact_form').insert([{ name,email, phone:body.phone, message:body.message }]);
         console.log(data);
         console.log(insertError);
    }
    return NextResponse.json( {
            status: StatusResponse.success,
            messages: `Gracias ${name} por contactarnos`,
            success: true
    }, { status: 200 });
}