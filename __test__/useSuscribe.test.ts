import {it,describe, expect } from 'vitest';
import useSuscribe from '../src/app/components/callToActionComponent/hooks/useSuscribe';
import { renderHook,act } from '@testing-library/react';
import React from 'react';




describe('useSusucribe', () => {

        it('estado inicial', () => {
            const { result } = renderHook(() => useSuscribe());
            expect(result.current.email.isValid).toBe(null);
        });
        it('Si el correo no es valido',()=>{
            const { result } = renderHook(() => useSuscribe());
            act(()=>{
                result.current.handleonBlur({target:{value:'hola'} } as React.ChangeEvent<HTMLInputElement>)
            })
            expect(result.current.email.value).toBe('hola');

            expect(result.current.email.isValid).toBe(false);
        })
        it('Si el correo es valido',()=>{
            const { result } = renderHook(() => useSuscribe());
            act(()=>{
                result.current.handleonBlur({target:{value:'hola@hola.com'} } as React.ChangeEvent<HTMLInputElement>)
            })
            expect(result.current.email.value).toBe('hola@hola.com');

            expect(result.current.email.isValid).toBe(true);
        })
});