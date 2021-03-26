import ImageSlide01 from '../assets/images/slide-item-01.jpg';
import ImageSlide02 from '../assets/images/slide-item-02.jpg';
import ImageSlide03 from '../assets/images/slide-item-03.jpg';

interface Slide {
    id: number,
    title: string,
    description: string,
    cover: string,
    color: string,
}

export const slides: Slide[] = [
    {
        id: 0,
        title: 'Marque a sua consulta',
        description: 'Estamos na Av. Bernardo Sayão, 3650 - Medical Center, 5º andar, sala 501. Bairro Três Poderes, Imperatriz - MA',
        cover: ImageSlide01,
        color: 'rgba(0, 58, 60, 0.52)',
    },
    {
        id: 1,
        title: 'Venha nos conhecer',
        description: 'Oferecemos o melhor para você que procura por Obstetrícia, Ginecologia e Reprodução Humana Assistida.',
        cover: ImageSlide02,
        color: 'rgba(249, 115, 82, 0.52)',
    },
    {
        id: 2,
        title: 'Exames de confiança',
        description: 'Temos os melhores profissionais e equipamentos para lhe oferecer exames e consultas de confiança.',
        cover: ImageSlide03,
        color: 'rgba(0, 58, 60, 0.52)',
    },
    
];

export default slides;