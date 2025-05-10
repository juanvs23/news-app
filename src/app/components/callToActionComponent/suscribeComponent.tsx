'use client'
import React from 'react'
import useSuscribe from './hooks/useSuscribe'
import AosWrapper from '../AosWrapper';
import { StatusResponse } from '../../../types/axios';
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

export default function SuscribeComponent() {
  const {handleSubmit,handleonBlur,email,loading,response} = useSuscribe()
  const { width, height } = useWindowSize ();
    return(
      <AosWrapper>
          <form onSubmit={handleSubmit}  method="post" className={`php-email-form cta-form ${email.isValid === false ? 'was-validated' : ''}`} data-aos="fade-up" data-aos-delay="300" noValidate>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email address..." onBlur={(event) => handleonBlur(event)} aria-label="Email address" aria-describedby="button-subscribe"/>
          <button className="btn btn-primary" disabled={email.isValid === false} type="submit" id="button-subscribe">suscribir</button>
        </div>
        {loading && <div className="loading" data-aos="fade-in">Enviando</div>}
        {email.isValid === false && <div className="error-message" data-aos="fade-in">Su correo no es válido</div>}
        {response.status===StatusResponse.success && response.success && <div className="sent-message" data-aos="fade-in">{response.messages}</div>}
        {response.status===StatusResponse.failed && <div className="error-message" data-aos="fade-in">{response.messages}</div>}
        {response.status===StatusResponse.success && response.success && <Confetti
    width={width}
    height={height}
    style={{
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: 9999,
      top: 0,
      left: 0,
      
    }}
    />}
      </form>
      </AosWrapper>
    )
}