'use client';
import { StatusResponse } from '@/src/types/axios';

import axios from "axios";
import { useEffect, useState } from "react";

export default function useContact (){

    const [loading,setloading] = useState(false)
    const [forData,setforData] = useState({
        name:{
            value:'',
            haveErrors:false,
            response:''
        },
        email:{
            value:'',
            haveErrors:false,
            response:''
        },
        phone:{
            value:'',
            haveErrors:false,
            response:''
        },
        message:{
            value:'',
            haveErrors:false,
            response:''
        }
    })
    const [ready , setReady] = useState(false);
    const [response, setResponse] = useState<{success:boolean,status:string,messages:string}>({success:false,status:'idle',messages:''})
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setloading(true);
        //obtenemos los datos del formulario
        const formData = new FormData(event.currentTarget);


        try {
            const fetchData = await axios.post('/api/contact-form',Object.fromEntries(formData));
            const {data} = fetchData;
            setResponse(data);
            
        } catch (error) {
            
            console.error('Error al guardar el correo:', error);
            setResponse({success:false,status:StatusResponse.failed,messages:'Hubo un error al enviar el correo'});
            
        }finally{
            setloading(false);
            setReady(false);
            setTimeout(() => {
                setResponse({success:false,status:StatusResponse.idle,messages:''});
                if(window !== undefined){
                    document.querySelectorAll('#contactForm .form-control').forEach((input)=>{
                        if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
                            console.log(input.value);
                            input.value = '';
                        }
                    })
                }
            }, 4000); // Reset response after 3 seconds
        }
        

    }

    useEffect(()=>{
       const {name,phone,email,message} = forData;
       if (
            (name.haveErrors === false && name.value !== '') &&  
            (phone.haveErrors === false && phone.value !== '') && 
            (email.haveErrors === false && email.value !== '') && 
            (message.haveErrors === false && message.value !== '')
        ) {
        setReady(true);
       }else{
        setReady(false);
       }
    },[forData]);

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>,type:string)=>{
        if(event.target.value==''){
            setforData((forData)=>({...forData,[type]:{
                            value:'',
                            haveErrors:true,
                            response:'Este campo es obligatorio'
                        }
                    }   
                )
            )
        }else{
            if(type=='email' && !emailPattern.test(event.target.value)){
                setforData((forData)=>({...forData,[type]:{
                                value:event.target.value,
                                haveErrors:true,
                                response: 'El formato del Correo no es valido'
                            }
                        }   
                    )
                )
                return null;
            }
            setforData((forData)=>({...forData,[type]:{
                                value:event.target.value,
                                haveErrors:false,
                                response: ''
                            }
                        }   
                    )
            )
        }
    }



    return {
        handlerSubmit,
        handlerChange,
        loading,
        forData,
        ready,
        response
    }

}