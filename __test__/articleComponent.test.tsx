// articleComponent.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ArticleComponent from '../src/app/components/articlesComponent/articleComponent'
import type { ArticlesInterface } from '../src/types/articles'
import '@testing-library/jest-dom' 
import React from 'react'


const mockArticle: ArticlesInterface = {
    title: 'Test Article Title',
    description: '<p>Test article description with <strong>HTML</strong> content</p>',
    url: 'https://example.com/article',
    urlToImage: 'https://example.com/image.jpg',
    publishedAt: '2022-01-01T12:00:00Z',
    content: '<p>Test article content with <strong>HTML</strong> content</p>'
}

describe('ArticleComponent',()=>{
    
    it('Esto debe mostrar el titulo',()=>{
        render(<ArticleComponent article={mockArticle} />)
        const title = document.createElement('h3')
        title.innerText = mockArticle.title
        title.className = 'card-title'
        const description = document.createElement('p')
        description.innerHTML = mockArticle.description
        description.className = 'card-text'
        expect(screen.getByText(mockArticle.title)).toBeInTheDocument()
    })
    it('Este debe mostrar un boton',()=>{
        render(<ArticleComponent article={mockArticle} />)
        const button = screen.getByText('Ver Fuente')
        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute('href',mockArticle.url)
    })
    it('esto debe mostrar la imagen',()=>{
        render(<ArticleComponent article={mockArticle} />)
        const image = screen.getByAltText(mockArticle.title) as HTMLImageElement
        expect(image).toBeInTheDocument()
        expect(image.src).toBe(mockArticle.urlToImage)
    })
});