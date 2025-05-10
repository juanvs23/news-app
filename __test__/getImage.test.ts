import {it,describe, expect } from 'vitest';
import getImage   from '../src/utils/getImage';



describe('getImage',()=>{
    const image = getImage('venezuela')
    it('Debe devolver un String',()=>{
        expect(image).toBeTypeOf('string');
    })
})