import { StatusResponse } from './../../../types/axios';
import { NextRequest, NextResponse } from "next/server";
import supabase from "../../../utils/supabase/server";


export async function POST(request: NextRequest) {
    
    const body = await request.json();

    const { email } = body;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(email);
    if (!isValidEmail) {
        return NextResponse.json( {
            status: 'failed',
            messages: 'El correo no es válido',
            success: false
        }, { status: 400 });
    }
     
    try{
        const {data} = await supabase.from('SaveLeads')
                    .select('*')
                    .eq('email', email)

        if (data && data.length > 0) {
            return NextResponse.json( {
                status: StatusResponse.failed,
                messages: 'El correo ya existe',
                success: true
            }, { status: 200 });
        }else{
            const {data, error: insertError } = await supabase.from('SaveLeads').insert([{ email }]);
            
            console.log(data);
            if (insertError) {
                console.log(insertError);
                return NextResponse.json( {
                    status: StatusResponse.failed,
                    messages: `Error al guardar el correo: ${insertError.message}`,
                    success: false
                }, { status: 200 });
            }
            return NextResponse.json( { 
                status: StatusResponse.success,
                messages: 'Correo guardado correctamente',
                success: true
            }, { status: 200 });
        }


    }catch (error) {
        console.error('Error al guardar el correo:', error);
        return NextResponse.json( {
            status: 'failed',
            messages: error,
            success: false
        }, { status: 400 });
    }
}