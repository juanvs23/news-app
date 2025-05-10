import {it,describe, expect } from 'vitest';
import getCategory   from '../src/utils/getCategory';
import { categories } from '../src/routes/categories';


describe('getCategory',()=>{
    it('Debe devolver un objeto',()=>{
        const category = getCategory('venezuela',categories)
        expect(category).toBeTypeOf('object');
    })
    it('Debe devolver un objeto con la propiedad title',()=>{
        const category = getCategory('venezuela',categories)
        expect(category).toHaveProperty('title');
    })
    it('Debe devolver un objeto con la propiedad slug',()=>{
        const category = getCategory('venezuela',categories)
        expect(category).toHaveProperty('slug');
    })
    it('Debe devolver un objeto con la propiedad description',()=>{
        const category = getCategory('venezuela',categories)
        expect(category).toHaveProperty('description');
    })
    it('Debe devolver un objeto con la propiedad image',()=>{
        const category = getCategory('venezuela',categories)
        expect(category).toHaveProperty('image');
    })
})