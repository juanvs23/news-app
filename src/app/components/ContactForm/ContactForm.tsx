'use client'
import { StatusResponse } from "@/src/types/axios";
import AosWrapper from "../AosWrapper";
import useContact from "./hooks/useContact"

export default function ContactForm() {

  const  {
    handlerSubmit,
    handlerChange,
    loading,
    forData,
    ready,
    response
    } = useContact();

  const {name,phone, email,message } = forData;



  //console.log(disabledSubmit);

    return(
      <AosWrapper>      
        <div className="row">
          <div className="col-lg-12">
            <div className="form-wrapper" data-aos="fade-up" data-aos-delay="400">
              <form  method="post" role="form" id="contactForm" className="php-email-form" noValidate onSubmit={handlerSubmit} >
                <div className="row">
                  <div className="col-md-6 form-group mt-3">
                    <div className={`input-group ${name.haveErrors === true? 'was-validated' : ''}`} >
                      <span className="input-group-text"><i className="bi bi-person"></i></span>
                      <input type="text" name="name" className="form-control" placeholder="Su nombre*" onBlur={(e)=>handlerChange(e,'name')} required />
                    </div>
                      {name.haveErrors && <div className="error-message">{name.response}</div>}
                  </div>
                  <div className="col-md-6 form-group mt-3">
                  <div className={`input-group ${phone.haveErrors === true? 'was-validated' : ''}`}>
                      <span className="input-group-text"><i className="bi bi-phone"></i></span>
                      <input type="text" className="form-control" name="phone" placeholder="Teléfono*" onBlur={(e)=>handlerChange(e,'phone')} required />
                    </div>
                    {phone.haveErrors && <div className="error-message">{phone.response}</div>}
                  
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-12 form-group mt-3">
                  <div className={`input-group ${email.haveErrors === true? 'was-validated' : ''}`}>
                      <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                      <input type="email" className="form-control" name="email" placeholder="Correo electrónico*" onBlur={(e)=>handlerChange(e,'email')} required />
                    </div>
                    {email.haveErrors && <div className="error-message">{email.response}</div>}
                  </div>
                  
                  <div className="form-group mt-3">
                    <div className={`input-group ${message.haveErrors === true? 'was-validated' : ''}`}>
                      <span className="input-group-text"><i className="bi bi-chat-dots"></i></span>
                      <textarea className="form-control" name="message" rows={6} placeholder="deja tu mensaje*" onBlur={(e)=>handlerChange(e,'message')} required></textarea>
                      {message.haveErrors && <div className="error-message">{message.response}</div>}
                    </div>
                  </div>
                  <div className="my-3">
                    {loading && <div className="loading" data-aos="fade-in">Enviando</div>}
                    {response.status===StatusResponse.success && response.success && <div className="sent-message" data-aos="fade-in">{response.messages}</div>}
                    <div className="error-message"></div>
                  </div>
                  <div className="text-center">
                    <button type="submit" disabled={!ready}>Enviar Mensaje</button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </AosWrapper>
      

    )
}