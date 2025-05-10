import { StatusResponse } from '../../../../types/axios';
import axios from 'axios';
import { useState } from "react";



export default function useSuscribe() {

    const [email, setEmail] = useState<{value:string,isValid:boolean|null}>({value:'',isValid:null});
    const [loading, setLoading] = useState(false);
    const [response,setResponse] = useState<{success:boolean,status:string,messages:string}>({success:false,status:'idle',messages:''});
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget.querySelector('input[type="email"]') as HTMLInputElement;
        const emailData = form.value;
        setLoading(true);

        // Validate email format using a regex pattern
        if (!emailPattern.test(emailData)) {
            // Handle invalid email format (e.g., show an error message)
            setEmail({value:emailData,isValid:false});
            return;
        }
       
             // Handle valid email format (e.g., proceed with form submission)
        try {
            const sending = await axios.post('/api/suscribe', { email: emailData});
            const { data } = sending;
            console.log(data);
            setResponse({success:data.success,status:data.status,messages:data.messages});
        } catch (error) {
            console.error('Error al guardar el correo:', error);
            setResponse({success:false,status:StatusResponse.failed,messages:'Error al guardar el correo'});   
        }
        finally {
            setLoading(false);
            setTimeout(() => {
                setResponse({success:false,status:StatusResponse.idle,messages:''});
                form.value = ''; // Clear the input field after submission
                setEmail({value:'',isValid:null}); // Reset email state
            }, 4000); // Reset response after 3 seconds
        }
    }

      
    const handleonBlur = (event: React.ChangeEvent<HTMLInputElement>):void => {
        const emailData = event.target.value;
        // Validate email format using a regex pattern
        
        if (!emailPattern.test(emailData)) {
            // Handle invalid email format (e.g., show an error message)
            
            setEmail({value:emailData,isValid:false});
        }
        else {
            // Handle valid email format (e.g., proceed with form submission)
            setEmail({value:emailData,isValid:true});
        }
        
    }

    
    return{
        handleSubmit,handleonBlur,email,loading,response
    }
}