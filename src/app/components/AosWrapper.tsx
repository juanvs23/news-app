'use client';

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function AosWrapper({children}:{children:React.ReactNode}){
    useEffect(()=>{
        if(window !== undefined){
            AOS.init();
        }
    },[])

    return (
        <>
        {children}
        </>
    )


}