import generalImage  from  '../../public/image/img_2.jpg';
import venezuelaImage from '../../public/image/venezuela.jpg';
import techImage from '../../public/image/tecnologia.jpg'
import deporte from '../../public/image/deportejpg.jpg'
import bitcoinImage from '../../public/image/bitcoin.jpg'
import economiaIma from '../../public/image/economia.jpg'
import saludimage from '../../public/image/salud.jpg'
import entretenimiento from '../../public/image/entretenimiento.jpg'
import politicsImage from '../../public/image/politics.jpg';

export const categories = [
    {
        id: 1,
        name: 'general',
        title: 'General',
        image: generalImage.src,
        slug: '/noticias/general',
        description: 'Noticias actualizadas sobre los acontecimientos más relevantes en el mundo. Información verificada y en tiempo real.',
    },{
        id: 2,
        name: 'venezuela',
        title: 'Venezuela',
        image:venezuelaImage.src,
        slug: '/noticias/venezuela',
        description: 'Últimas noticias de Venezuela: política, economía, sociedad y más. Información confiable y actualizada.',
    },
    {
        id: 3,
        name: 'tecnologia',
        title: 'Tecnología',
        image: techImage.src,
        slug: '/noticias/tecnologia',
        description: ' Lo último en tecnología, innovación, gadgets y tendencias digitales. Mantente al día con los avances tecnológicos.',
    },
    {
        id: 4,
        name: 'bitcoin',
        title: 'Bitcoin',
        image: bitcoinImage.src,
        slug: '/noticias/bitcoin',
        description: 'Noticias sobre Bitcoin, criptomonedas, blockchain y finanzas descentralizadas. Análisis y actualizaciones del mercado.',
    },
    {
        id: 5,
        name: 'economia',
        title: 'Economia',
        image: economiaIma.src,
        slug: '/noticias/economia',
        description: 'Análisis y noticias sobre economía global, mercados financieros y tendencias económicas. Información actualizada y confiable.',
    },
    {
        id: 6,
        name: 'deportes',
        title: 'Deportes',
        image:deporte.src,
        slug: '/noticias/deportes',
        description: 'Últimas noticias deportivas, resultados en vivo y análisis de eventos deportivos. Información actualizada y confiable.',
    },
    {
        id: 7,
        name: 'politica',
        title: 'Política',
        image: politicsImage.src,
        slug: '/noticias/politica',
        description: 'Últimas noticias de política nacional e internacional. Análisis y opiniones sobre los acontecimientos políticos más relevantes.',
    },
    {
        id: 8,
        name: 'entretenimiento',
        title: 'Entretenimiento',
        image:entretenimiento.src, 
        slug: '/noticias/entretenimiento',
        description: 'Noticias de cine, música, series, famosos y cultura pop. ¡Todo sobre el mundo del espectáculo! Información actualizada y entretenida!',
    },
    {
        id: 9,
        name: 'salud',
        title: 'Salud',
        image:saludimage.src,
        slug: '/noticias/salud',
        description: 'Consejos de salud, avances médicos, bienestar y prevención. Información verificada por expertos. Mantente informado sobre tu salud.',
    },
]